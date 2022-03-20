const express = require("express");
const db = require("./config/db");
const app = express();
const port = 3000;
const router = require("./Routes/index");
const errorHandle = require("./Middlewares/errorHandle");
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
// const cookieParser = require("cookie-parser");
// app.use(cookieParser);
app.use("/static", express.static("public"));
router(app);

app.use(errorHandle);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
