const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleWare/async");
const prisma = require("../utils/prisma");
const ErrorResponse = require("../utils/ErrorResponse");

// @desc    Register a user
// @route   POST api/v1/recruiter/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, email_verified, password } = req.body;
  const requiredFields = [
    "first_name",
    "last_name",
    "email_verified",
    "password",
  ];
  
  const emptyFields = requiredFields.filter((field) => !req.body[field]);
  if (emptyFields.length > 0) {
    return next(new ErrorResponse(400, `Missing ${emptyFields.join(", ")}`));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!emailRegex.test(email_verified)) {
    return next(
      new ErrorResponse(400, `${email_verified} is an invalid email`)
    );
  }

  if (!passwordRegex.test(password)) {
    return next(
      new ErrorResponse(
        400,
        `Password must be at least 8 characters long and contain an uppercase letter, a number, and a special character`
      )
    );
  }

  const recruiter = await prisma.recruiter.findUnique({
    where: {
      email_verified,
    },
  });

  if (recruiter) {
    return next(new ErrorResponse(400, `Email already exists`));
  }

  await prisma.recruiter.create({
    data: { first_name, last_name, email_verified, password: hashedPassword },
  });

  return res
    .status(201)
    .json({ success: true, message: "Recruiter registered successfully" });
});

// @desc    Login user
// @route   POST api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email_verified, password } = req.body;

  if (!email_verified || !password) {
    return next(new ErrorResponse(400, "Please enter email and password"));
  }

  const recruiter = await prisma.recruiter.findUnique({
    where: {
      email_verified,
    },
  });

  if (!recruiter || !(await bcrypt.compare(password, recruiter.password))) {
    return next(new ErrorResponse(401, "Invalid Credentials"));
  }

  const token = jwt.sign({ id: recruiter.org_id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  res.status(200).json({ success: true, token });
});