const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleWare/async");
const ErrorResponse = require("../utils/ErrorResponse");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  let authToken = req.headers.authorization;
  if (authToken && authToken.startsWith("Bearer")) {
    token = authToken.split(" ")[1];
  }
  if (!token) {
    return next(new ErrorResponse(401, "Unauthorized"));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.recruiter = decoded.id;
  next();
});
