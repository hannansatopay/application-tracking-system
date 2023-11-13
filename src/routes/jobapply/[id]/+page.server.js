import { redirect, fail } from "@sveltejs/kit";
import { applyJob } from "$lib/jobseeker";

let id;
export async function load({ params, request }) {
  id = params.id;
}

export const actions = {
  default: async ({ cookies, request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { first_name, last_name, email, phone_number } = formData;

    const { error, data } = await applyJob(
      first_name,
      last_name,
      email,
      phone_number,
      id
    );
    if (error) {
      return fail(401, { error });
    }

    throw redirect(302, "/jobs");
  },
};
