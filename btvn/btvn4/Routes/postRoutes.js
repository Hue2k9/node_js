const express = require("express");
const postController = require("../Controllers/postController");
const postRouter = express.Router();
const auth = require("../Middlewares/authMiddleware");

postRouter
  .route("/")
  .get(postController.getAllPost);
  
postRouter
  .route("/:id")
  .post(postController.createPost)
  .get(postController.getPostByPostId)
  .get(postController.getPostByUserId);

module.exports = postRouter;