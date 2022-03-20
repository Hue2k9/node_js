const express = require("express");
const postController = require("../Controllers/postController");
const postRouter = express.Router();
const { authenticateToken } = require("../Middlewares/authMiddleware");

postRouter.route("/").get(authenticateToken, postController.getAllPost);

postRouter
  .route("/:id")
  .post(authenticateToken, postController.createPost)
  .get(authenticateToken, postController.getPostByUserId);

module.exports = postRouter;
