const express = require("express");
const userController = require("../Controllers/UserController");
const userRouter = express.Router();
const authMiddleware = require("../Middlewares/authMiddleware");

userRouter
   .route("/")
   .post(userController.addUser)
   .get(userController.getAllUsers);

userRouter.get('/age',userController.findByAge);
userRouter.get('/name',userController.findByName);

userRouter
   .route("/:id")
   .get(userController.getUser)
   .put(userController.updateUser)
   .delete(userController.deleteUser);
  
module.exports = userRouter;
