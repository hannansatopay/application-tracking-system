const ErrorResponse = require("../utils/ErrorResponse");

const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV == "development") {
    console.log(err)
  }
  const error = { ...err };

  error.message = err.message;
  error.name = err.name;

  if (error.code == "P2002") {
    const dupliValues = error.meta.target.split("_");
    error.status = 400;
    error.message = `${dupliValues[0]} ${dupliValues[1]} already exists`;
    new ErrorResponse(error.status, error.message);
  }

  res
    .status(error.status || 500)
    .json({ success: false, error: error.message || "Internal Server Error" });
};

module.exports = errorHandler;
