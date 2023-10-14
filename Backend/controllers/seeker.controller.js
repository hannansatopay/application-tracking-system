const asyncHandler = require("../middleWare/async");
const prisma = require("../utils/prisma");
const ErrorResponse = require("../utils/ErrorResponse");

// @desc    Get all jobs
// @route   GET api/v1/job
// @access  Public
exports.getAllJobs = asyncHandler(async (req, res, next) => {
  const jobs = await prisma.job.findMany();
  return res.status(200).json({ sucess: true, jobs });
});

// @desc    Get jobs by id
// @route   GET api/v1/job/:id
// @access  Public
exports.getJob = asyncHandler(async (req, res, next) => {
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

  return res.status(200).json({ sucess: true, job });
});
