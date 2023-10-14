const asyncHandler = require("../middleWare/async");
const prisma = require("../utils/prisma");
const ErrorResponse = require("../utils/ErrorResponse");

// @desc    Post a job
// @route   POST api/v1/recruiter/job
// @access  Private
exports.postJob = asyncHandler(async (req, res, next) => {
  const { title, description, job_type, no_of_openinigs, stipend } = req.body;
  const org_id = req.recruiter;
  const job = await prisma.job.create({
    data: {
      title,
      description,
      job_type,
      no_of_openinigs,
      stipend,
      org_id,
    },
  });
  return res.status(201).json({ success: true, job });
});

// @desc    Get jobs posted by recruiter
// @route   GET api/v1/recruiter/job
// @access  Private
exports.getRecruiterJobs = asyncHandler(async (req, res, next) => {
  const jobs = await prisma.job.findMany({
    where: {
      org_id: req.recruiter,
    },
  });
  return res.status(200).json({ success: true, jobs });
});

// @desc    Update job
// @route   PUT api/v1/recruiter/job/:id
// @access  Private
exports.updateJob = asyncHandler(async (req, res, next) => {
  const job = await prisma.job.findUnique({
    where: {
      job_id: req.params.id,
    },
  });
  if (!job) {
    return next(
      new ErrorResponse(404, `No Job with ${req.params.id} id found`)
    );
  }

  if (job.org_id != req.recruiter) {
    return next(new ErrorResponse(401, `Recruiters can only update own jobs`));
  }

  const updatedJob = await prisma.job.update({
    where: {
      job_id: req.params.id,
    },
    data: { ...req.body },
  });

  return res.status(200).json({ success: true, job: updatedJob });
});

// @desc    Delete job
// @route   DELETE api/v1/recruiter/job/:id
// @access  Private
exports.deleteJob = asyncHandler(async (req, res, next) => {
  const job = await prisma.job.findUnique({
    where: {
      job_id: req.params.id,
    },
  });

  if (!job) {
    return next(
      new ErrorResponse(404, `No Job with ${req.params.id} id found`)
    );
  }

  if (job.org_id != req.recruiter) {
    return next(new ErrorResponse(401, `Recruiters can only delete own jobs`));
  }

  const updatedJob = await prisma.job.delete({
    where: {
      job_id: req.params.id,
    },
  });

  return res.status(200).json({ success: true, job: updatedJob });
});
