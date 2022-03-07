const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/usersController");

userRouter
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.addUser);

userRouter
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRouter;