const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");
const ErrorResponse = require("../common/ErrorResponse");
const crypto = require("crypto");
// const crypto = require("crypto-js");
module.exports.login = asyncHandle(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.send("Người dùng không tồn tại");
  }
  if (!(await user.isPasswordMatch(password))) {
    return res.send("Tài khoản hoặc mật khẩu không chính xác");
  }
  const token = jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: "30m",
  });
  res.status(200).json({ token });
});

module.exports.forgetPassword = asyncHandle(async (req, res) => {
  res.render("pages/ChangePassword/sendEmail.ejs");
  const { email } = req.body;
  if (!email) return res.send("Vui long nhap email");
  const user = await User.findOne({ email });

  if (!user) return res.send("Nguoi dung khong ton tai");
  let code = await user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });
  res
    .status(200)
    .redirect(`${process.env.HOST}/auth/change-password?code=${code}`);
  // .json({ url: `${process.env.HOST}/auth/change-password?code=${code}` });
});

module.exports.changePassword = asyncHandle(async (req, res, next) => {
  const { code } = req.query;
  const user = await User.findOne({
    resetPasswordToken: code,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).send("Khong the doi password");
  }

  // Set new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.send("change  password successfuly");
  //res.redirect("pages/index");
});
