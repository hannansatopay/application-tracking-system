const router = require("express").Router();

const { register, login } = require("../controllers/auth.controller");
const {
  postJob,
  getRecruiterJobs,
  updateJob,
  deleteJob,
} = require("../controllers/job.controller");
const { protect } = require("../middleWare/auth");

router.post("/auth/register", register);
router.post("/auth/login", login);

router.route("/job").get(protect, getRecruiterJobs).post(protect, postJob);
router.route("/job/:id").put(protect, updateJob).delete(protect, deleteJob);

module.exports = router;
