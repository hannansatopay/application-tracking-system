import jwt from "jsonwebtoken";

let JWT_ACCESS_SECRET = "tA7sSb#^aBxT1r0LDaCOwasNF8MeVtcTb@HrnxiEJ5UVy!6v%o";

export const setAuthToken = ({ cookies, token }) => {
  cookies.set("AuthorizationToken", `Bearer ${token}`, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    path: "/",
  });
};

export const parseToken = (token) => {
  const { id, email } = jwt.verify(token, JWT_ACCESS_SECRET);
  return { id, email };
};
