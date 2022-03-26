const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.route("/login").post(authController.login);

router
  .route("/forgot-password")
  .get(authController.forgotPasswordView)
  .post(authController.forgotPassword);

router
  .route("/change-password")
  .get(authController.changePasswordView)
  .post(authController.changePassword);

module.exports = router;
