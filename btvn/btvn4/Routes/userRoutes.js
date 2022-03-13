const express = require("express");
const userController = require("../Controllers/UserController");
const userRouter = express.Router();
const authMiddleware = require("../Middlewares/authMiddleware");

userRouter.route("/").post(userController.addUser);

userRouter
  .route("/:id/getall")
  .get(authMiddleware.authorization, userController.getAllUsers);

userRouter
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(authMiddleware.authorization, userController.deleteUser);

module.exports = userRouter;
