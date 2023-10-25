import { redirect, fail } from "@sveltejs/kit";
import { createUser } from "$lib/user.js";

export function load({ cookies }) {
  const token = cookies.get("AuthorizationToken");

  if (token) {
    throw redirect(302, "/");
  }
}

export const actions = {
  default: async ({ cookies, request }) => {
    const formData = Object.fromEntries(await request.formData());
    const {
      first_name,
      last_name,
      password,
      email_verified,
      user_agent,
      user_ip,
    } = formData;

    const requiredFields = [
      "first_name",
      "last_name",
      "email_verified",
      "password",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      return fail(401, { error: `Missing ${emptyFields.join(", ")}` });
    }

    const { error, data } = await createUser(
      first_name,
      last_name,
      password,
      email_verified,
      user_agent,
      user_ip
    );

    if (error) {
      return fail(401, { error });
    }

    throw redirect(302, "/login");
  },
};
