import { redirect } from "@sveltejs/kit";
import { parseToken } from "$lib/helpers";
import { getRecruiter } from "$lib/user";

export async function load({ cookies }) {
    const token = cookies.get("AuthorizationToken");
    if (!token) {
        throw redirect(302, "/register");
    }
    const { id, email } = parseToken(token);
    const data = await getRecruiter(email, id);

    return { recruiter: JSON.parse(data) };
}