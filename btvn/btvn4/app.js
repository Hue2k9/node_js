const express = require("express");
const db = require("./config/db");
const app = express();
const port = 3000;
const router = require("./Routes/index");
const errorHandle = require("./Middlewares/errorHandle");
const path = require("path");
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
// const cookieParser = require("cookie-parser");
// app.use(cookieParser);
app.use("/static", express.static("public"));
router(app);
app.use(errorHandle);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded()); //middleware de xu ly dang form
app.use(express.json()); //Dang gui tu code js len có express.json()

app.set("view engine", "ejs");
app.set("views", "./resources/views");

//render ra main page
app.get("/home", (req, res) => {
  res.render("pages/index.ejs");
});

app.get("/change", (req, res) => {
  res.render("pages/ChangePassword/changePassword.ejs");
});

app.get("/sendemail", (req, res) => {
  res.render("pages/ChangePassword/sendEmail.ejs");
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
