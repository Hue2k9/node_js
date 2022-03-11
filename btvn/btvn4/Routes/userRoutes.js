const express = require("express");
const userController = require("../Controllers/UserController");
const userRouter = express.Router();
const authMiddleware = require("../Middlewares/authMiddleware");

userRouter
   .route("/")
   .post(userController.addUser)
   .get(userController.getAllUsers);

userRouter
   .route("/:id")
   .get(userController.getUser)
   .put(userController.updateUser)
   .delete(userController.deleteUser);

userRouter.route("/age").get(userController.findByAge);
userRouter.route("/name").get(userController.findByName);

module.exports = userRouter;
