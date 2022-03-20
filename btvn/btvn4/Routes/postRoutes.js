const express = require("express");
const postController = require("../Controllers/postController");
const postRouter = express.Router();
const auth = require("../Middlewares/authMiddleware");

postRouter.route("/").get(auth.authenticateToken, postController.getAllPost);

postRouter
  .route("/:id")
  .post(auth.authenticateToken, postController.createPost)
  .get(auth.authenticateToken, postController.getPostByUserId);

module.exports = postRouter;
