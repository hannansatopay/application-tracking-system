const router = require("express").Router();

const { getAllJobs, getJob } = require("../controllers/seeker.controller");

router.get("/", getAllJobs);
router.get("/:id", getJob);

module.exports = router;
