const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const router = require("./Routes/index");
const errorHandle = require("./Middlewares/errorHandle");
const db = require("./config/db");

dotenv.config();
app.use(express.json());
app.use(methodOverride("_method"));
app.use("/static", express.static("public"));
app.use(errorHandle);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); //middleware de xu ly dang form

app.set("view engine", "ejs");
app.set("views", "./resources/views");

router(app);
//render ra main page
app.get("/home", (req, res) => {
  res.render("pages/index.ejs");
});

// app.get("/change", (req, res) => {
//   res.render("pages/ChangePassword/changePassword.ejs");
// });

// app.get("/sendemail", (req, res) => {
//   res.render("pages/ChangePassword/sendEmail.ejs");
// });

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
