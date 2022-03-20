const express = require("express");
const userController = require("../Controllers/UserController");
const userRouter = express.Router();
const auth = require("../Middlewares/authMiddleware");

userRouter.route("/").post(userController.addUser);

userRouter
  .route("/:id")
  .get(auth.authenticateToken, userController.getUser)
  .put(auth.authenticateToken, userController.updateUser)
  .delete(auth.authenticateToken, userController.deleteUser);
userRouter
  .route("/getall/:id")
  .get(auth.authenticateToken, auth.authorization, userController.getAllUsers);

module.exports = userRouter;
