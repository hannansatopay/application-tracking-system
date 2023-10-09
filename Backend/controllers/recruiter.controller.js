const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const asyncHandler = require("../middleWare/async");
const prisma = require("../utils/prisma");
const ErrorResponse = require("../utils/ErrorResponse");

const sendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  //   const secure = process.env.NODE_ENV == "production" ? true : false;
  //   const options = {
  //     expires: new Date(
  //       Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //     ),
  //     httpOnly: true,
  //     secure,
  //   };

  res
    .status(statusCode)
    // .cookie("token", token, options)
    .json({ success: true, token });
};

// @desc    Register a user
// @route   POST api/v1/recruiter/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.recruiter.findUnique({
    where:{
        username
    }
  })


  await prisma.recruiter.create({
    data: { username, password: hashedPassword },
  });
  return res
    .status(200)
    .json({ success: true, message: "User created successfully" });
});

// @desc    Login user
// @route   POST api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new ErrorResponse(400, "Please enter email and password"));
  }

  const user = await prisma.recruiter.findUnique({
    where: {
      username,
    },
  });

  
  if (!user) {
    return next(new ErrorResponse(401, "Invalid Username"));
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return next(new ErrorResponse(401, "Invalid Credentials"));
  }

  sendToken(user, 200, res);
});
