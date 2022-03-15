const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");

module.exports.login = asyncHandle(async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.send("Nguoi dung khong ton tai");
  }
  if (!(await user.isPasswordMatch(password))) {
    return res.send("Tai khoan hoac mat khau khong chinh xac");
  }
  const token = jwt.sign({ username }, "huexinhdep", { expiresIn: "30m" });

  res.status(200).json({ token });
});
