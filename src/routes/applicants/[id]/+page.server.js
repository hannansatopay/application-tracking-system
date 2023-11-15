import { redirect } from "@sveltejs/kit";
import { getApplicants } from "$lib/jobseeker";

export async function load({ params, cookies }) {
  const token = cookies.get("AuthorizationToken");
  if (!token) {
    throw redirect(302, "/register");
  }
  const id = params.id;
  const jobseeker = await getApplicants(id);
  return { applicants: JSON.parse(jobseeker) };
}
