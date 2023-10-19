import db from "./db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

let JWT_ACCESS_SECRET = "tA7sSb#^aBxT1r0LDaCOwasNF8MeVtcTb@HrnxiEJ5UVy!6v%o";

function createJWT(user) {
  return  jwt.sign({id: user.id, email: user.email}, JWT_ACCESS_SECRET, {
    expiresIn: '1d'
  });
}

export async function createUser(organization, email, password, userAgent, ip) {
  // Add code
}

export async function loginUser(email, password) {
  try {
    const user = await db.organization.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return {error: 'User not found'};
    }

    const valid = await bcrypt.compare(password, user.password);

    // const valid = true;

    if (!valid) {
      return {error: 'Invalid password'};
    }

    // Update last_login in database
    await db.organization.update({
      where: {
        email: email
      },
      data: {
        last_login: new Date()
      }
    });

    const token = createJWT(user);

    return {token};
  } catch (error) {
    console.log(error);
    return error;
  }
}