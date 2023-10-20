import { redirect, fail } from '@sveltejs/kit';
import { setAuthToken } from "$lib/helpers.js";
import { loginUser } from "$lib/user.js";
import jwt from "jsonwebtoken";
import db from './../../../prisma/db';
import bcrypt from "bcryptjs";

let JWT_ACCESS_SECRET = "tA7sSb#^aBxT1r0LDaCOwasNF8MeVtcTb@HrnxiEJ5UVy!6v%o";

// export function load({ cookies }) {
//     const token = cookies.get('AuthorizationToken');

//     if (token) {
//         throw redirect(302, '/');
//     }
// }



export const actions = {
    default: async ({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());

        const { first_name, last_name, email_verified, password } = formData;
        const requiredFields = [
            "first_name",
            "last_name",
            "email_verified",
            "password",
        ];

        console.log(first_name);
        console.log(last_name);
        console.log(email_verified);
        console.log(password);
        // const emptyFields = requiredFields.filter((field) => !req.body[field]);
        // if (emptyFields.length > 0) {
        //     return next(new ErrorResponse(400, `Missing ${emptyFields.join(", ")}`));
        // }

        const hashedPassword = await bcrypt.hash(password, 10);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex =
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!emailRegex.test(email_verified)) {
            return fail(401, { error: 'Invalid credentials' });
        }

        // if (!passwordRegex.test(password)) {
        //     return fail(401, { error: 'Wrong Password' });
        // }

        const recruiter = await db.recruiter.findUnique({
            where: {
                email_verified,
            },
        });

        if (recruiter) {
            return fail(401, { error: 'Email already exists' });
        }

        await db.recruiter.create({
            data: { first_name, last_name, email_verified, password: hashedPassword },
        });

        // return res
        //   .status(201)
        //   .json({ success: true, message: "Recruiter registered successfully" });
        // const { error, token } = await loginUser(email, password);

        // if (error) {
        //     return fail(401, { error });
        // }

        setAuthToken({ cookies, token });

        const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);

        throw redirect(302, "/")
    }
};
