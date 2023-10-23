import db from "../../prisma/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let JWT_ACCESS_SECRET = "tA7sSb#^aBxT1r0LDaCOwasNF8MeVtcTb@HrnxiEJ5UVy!6v%o";

function createJWT(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_ACCESS_SECRET, {
    expiresIn: "1d",
  });
}

export async function createUser(
  first_name,
  last_name,
  password,
  email_verified,
  user_agent,
  user_ip
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!emailRegex.test(email_verified)) {
    return { error: `${email_verified} is an invalid email` };
  }

  if (!passwordRegex.test(password)) {
    return {
      error: `Password must be at least 8 characters long and contain an uppercase letter, a number, and a special character`,
    };
  }

  const recruiter = await db.recruiter.findUnique({
    where: {
      email_verified,
    },
  });

  if (recruiter) {
    return { error: `Email already exists` };
  }

  await db.recruiter.create({
    data: {
      first_name,
      last_name,
      email_verified,
      password: hashedPassword,
      user_agent,
      user_ip,
    },
  });

  return { data: true };
}

export async function loginUser(email, password) {
  try {
    const user = await db.organization.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return { error: "User not found" };
    }

    const valid = await bcrypt.compare(password, user.password);

    // const valid = true;

    if (!valid) {
      return { error: "Invalid password" };
    }

    // Update last_login in database
    await db.organization.update({
      where: {
        email: email,
      },
      data: {
        last_login: new Date(),
      },
    });

    const token = createJWT(user);

    return { token };
  } catch (error) {
    console.log(error);
    return error;
  }
}
