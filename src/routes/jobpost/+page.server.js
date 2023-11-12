import { redirect, fail } from "@sveltejs/kit";
import { parseToken } from "$lib/helpers";
import { createJob } from "$lib/job";

export const actions = {
  default: async ({ cookies, request }) => {
    const { title, job_type, end_date, description, stipend, no_of_openings } =
      Object.fromEntries(await request.formData());
    const formData = {
      title,
      job_type,
      end_date,
      description,
      stipend,
      no_of_openings,
    };
    const requiredFields = [
      "title",
      "job_type",
      "end_date",
      "description",
      "stipend",
      "no_of_openings",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      return fail(401, { error: `Missing ${emptyFields.join(", ")}` });
    }

    const token = cookies.get("AuthorizationToken");
    const { id } = parseToken(token);
    const { error, data } = await createJob(
      title,
      job_type,
      end_date,
      description,
      stipend,
      no_of_openings,
      id
    );
    if (error) {
      return fail(401, { error });
    }
    throw redirect(301, "/jobs")
  },
};

export function load({ cookies }) {
  const token = cookies.get("AuthorizationToken");
  if (!token) {
    throw redirect(302, "/register");
  }
}
