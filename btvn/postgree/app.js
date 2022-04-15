const express = require("express");
const app = express();
const port = 5000;
const db = require("./model");
// db.sequelize.sync();
const User = db.user;
const Post = db.post;

app.get("/", async (req, res) => {
  const user = await User.create({
    fullname: "Hoang Minh Hue",
    password: "abc",
    username: "Hue2k9",
  });
  await Post.create({
    title: "music",
    content: "Chay ve khoc voi anh",
    userId: "8e3706e9-4dcb-43bb-bb98-4aa26c2ba9da",
  });
  await res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
