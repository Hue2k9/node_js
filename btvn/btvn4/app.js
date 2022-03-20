const express = require("express");
const db = require("./config/db");
// const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const router = require("./Routes/index");
const errorHandle = require("./Middlewares/errorHandle");
app.use(express.json());
// app.use(cookieParser);
app.use("/static", express.static("public"));
router(app);

app.use(errorHandle);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
