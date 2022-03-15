const userRouter = require("./userRoutes");
const authRouter = require("./authRoutes");
const postRouter = require("./postRoutes");

module.exports = (app) => {
  app.use("/api/users", userRouter);
  app.use("/api/posts", postRouter);
  app.use("/api/auth", authRouter);
};
