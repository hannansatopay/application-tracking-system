import db from "../../prisma/db";

export const createJob = async (
  title,
  job_type,
  end_date,
  description,
  stipend,
  no_of_openinigs,
  org_id
) => {
  const currentDate = new Date();
  const inputEndDate = new Date(end_date);
  if (isNaN(inputEndDate) || inputEndDate <= currentDate) {
    return {
      error:
        "End date must be a valid date and should be after the current date.",
    };
  }
  const allowedJobTypes = ["full-time", "part-time", "contract", "internship"];
  if (!allowedJobTypes.includes(job_type.toLowerCase())) {
    return {
      error:
        "Invalid job type. Allowed values are: full-time, part-time, contract, internship.",
    };
  }

  try {
    const jobCreated = await db.job.create({
      data: {
        title,
        job_type: job_type.toLowerCase(),
        end_date: new Date(end_date).toISOString(),
        description,
        stipend,
        no_of_openinigs: +no_of_openinigs,
        org_id,
      },
    });
    return { data: true, job: jobCreated };
  } catch (error) {
    return { error };
  }
};

export const getJobs = async () => {
  try {
    const jobs = await db.job.findMany({
      include: {
        org: {
          select: {
            website: true,
            first_name: true,
            last_name: true,
          },
        },
      },
    });
    if (jobs) {
      jobs.forEach((j) => (j.stipend = j.stipend.toString()));
    }
    return { data: true, jobs };
  } catch (error) {
    return { error };
  }
};
