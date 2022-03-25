const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.route("/login").post(authController.login);

router.route("/forgot-password").post(authController.forgetPassword);
router.route("/change-password").post(authController.changePassword);

module.exports = router;
