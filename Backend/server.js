const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(bodyParser.json());


app.post('/api/endpoint', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

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
