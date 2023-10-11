const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleWare/async");
const prisma = require("../utils/prisma");
const ErrorResponse = require("../utils/ErrorResponse");

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  const secure = process.env.NODE_ENV == "production" ? true : false;
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure,
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success: true, token });
};

// @desc    Register a user
// @route   POST api/v1/recruiter/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, Email_verified, Password } = req.body;
  const requiredFields = [
    "first_name",
    "last_name",
    "Email_verified",
    "Password",
  ];
  const emptyFields = requiredFields.filter((field) => !req.body[field]);
  if (emptyFields.length > 0) {
    return next(new ErrorResponse(400, `Missing ${emptyFields.join(", ")}`));
  }

  const hashedPassword = await bcrypt.hash(Password, 10);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!emailRegex.test(Email_verified)) {
    return next(
      new ErrorResponse(400, `${Email_verified} is an invalid email`)
    );
  }

  if (!passwordRegex.test(Password)) {
    return next(
      new ErrorResponse(
        400,
        `Password must be at least 8 characters long and contain an uppercase letter, a number, and a special character`
      )
    );
  }

  const user = await prisma.recruiter.findUnique({
    where: {
      Email_verified,
    },
  });

  if (user) {
    return next(new ErrorResponse(400, `Email already exists`));
  }

  await prisma.recruiter.create({
    data: { first_name, last_name, Email_verified, Password: hashedPassword },
  });
  return res
    .status(201)
    .json({ success: true, message: "User created successfully" });
});

// @desc    Login user
// @route   POST api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { Email_verified, Password } = req.body;

  if (!Email_verified || !Password) {
    return next(new ErrorResponse(400, "Please enter email and password"));
  }

  const user = await prisma.recruiter.findUnique({
    where: {
      Email_verified,
    },
  });

  if (!user || !(await bcrypt.compare(Password, user.Password))) {
    return next(new ErrorResponse(401, "Invalid Credentials"));
  }

  sendToken(user, 200, res);
});
