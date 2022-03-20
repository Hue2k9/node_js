const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");
const dotenv = require("dotenv");
dotenv.config();

module.exports.authorization = async function (req, res, next) {
  let { id } = req.params;
  let user = await User.findById(id);

  if (!user) return res.send("User does not exist");

  if (user.role !== "admin") return res.send("User does not have permission");
  next();
};

module.exports.authenticateToken = asyncHandle(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.header("Authorization").split(" ")[1];
    await jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) return res.status(200).json({ error: "JWT sai" });
    });
    next();
  } else {
    res.status(400).json({ error: "Khong co jwt. Ban can dang nhap" });
  }
});
