import { redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ request }) => {
		// Form submission logic
	}
};

export function load({ cookies }) {
	const token = cookies.get("AuthorizationToken");
	if (!token) {
	  throw redirect(302, "/register");
	}
  }