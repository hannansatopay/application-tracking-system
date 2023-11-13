import db from "../../prisma/db";

export async function applyJob(
  first_name,
  last_name,
  email,
  phone_number,
  job_id
) {
  try {
    const job = await db.job.findUnique({
      where: {
        job_id,
      },
    });
    if (!job) {
      return { error: "Job not found" };
    }
    const jobSeeker = await db.jobseeker.create({
      data: {
        first_name,
        last_name,
        email,
        phone_number,
        job_id,
      },
    });

    return jobSeeker;
  } catch (error) {
    console.log(error);
    return error;
  }
}
