import { getJobs } from "$lib/job";

export async function load({ params }) {
    const jobs = await getJobs()
	return {
		jobs
	};
}