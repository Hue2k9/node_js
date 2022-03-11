const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const mongoose = require('mongoose');
const router = require("./Routes/index");

mongoose
  .connect("mongodb://127.0.0.1:27017/Users")
  .then(() => {
    console.log("Connectd to database");
  })
  .catch((err) => {
      console.log(err.message);
  });

app.use("/static", express.static("public"));
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})
