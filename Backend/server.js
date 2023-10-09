require("dotenv").config();;
const express = require("express");
// const bodyParser = require("body-parser");

const recruiterRouter = require("./routes/recruiter.router"); 
const errorHandler = require("./middleWare/error");

const app = express();

// app.use(bodyParser.json()); // no need to use this
app.use(express.json());

app.use("/api/v1/recruiter/auth", recruiterRouter)
app.use(errorHandler)

// APIs endpoint

// Route not found
app.use((req, res, next) => {
    console.log("ATS -> URL not Found || Requested URL -  " + req.url);
    return res.status(404).send("404 not found");
});

const port = process.env.PORT || 5000;

// listen
app.listen(port, () => {
    console.log("ATS -> Server is listining on port " + port);
});
