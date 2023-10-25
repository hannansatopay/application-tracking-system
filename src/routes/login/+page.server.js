import { redirect, fail } from '@sveltejs/kit';
import { setAuthToken } from "$lib/helpers.js";
import { loginUser } from "$lib/user.js";
import jwt from "jsonwebtoken";

let JWT_ACCESS_SECRET = "tA7sSb#^aBxT1r0LDaCOwasNF8MeVtcTb@HrnxiEJ5UVy!6v%o";

export function load({ cookies }) {
    const token = cookies.get('AuthorizationToken');
 
    if (token) {
        throw redirect(302, '/');
    }
}

export const actions = {
	default: async ({ cookies, request }) => {
        const formData = Object.fromEntries(await request.formData());
        const { email, password } = formData;

        const { error, token } = await loginUser(email, password);

        if (error) {
            return fail(401, {error});
        }

        setAuthToken({cookies, token});

        const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);

        throw redirect(302, "/jobpost")
	}
};
