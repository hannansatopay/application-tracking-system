require("dotenv").config();
const express = require("express");

const recruiterRouter = require("./routes/recruiter.router");
const jobSeekerRouter = require("./routes/seeker.router");
const errorHandler = require("./middleWare/error");

const app = express();

app.use(express.json());

app.use("/api/v1/recruiter", recruiterRouter);
app.use("/api/v1/job", jobSeekerRouter);
app.use("/", (req, res) =>
  res.status(404).json({ success: false, error: "Route not exists" })
);
app.use(errorHandler);

const port = process.env.PORT || 5000;

// listen
app.listen(port, () => {
  console.log("ATS -> Server is listining on port " + port);
});