const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");
const dotenv = require("dotenv");
dotenv.config();
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
