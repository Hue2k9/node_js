const userRouter = require("./userRoutes");
const postRouter = require("./postRoutes");

module.exports = (app) => {
    app.use("/users", userRouter);
    app.use("/posts", postRouter);
};

