const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
app.use(express.json()); //middleware

// import router
const courseRouter = require("./routes/courseRoutes");
const userRouter = require("./routes/userRoutes");


mongoose
  .connect("mongodb://127.0.0.1:27017/hit_courses")
  .then(() => {
      console.log("Connected to database");
  })
  .catch((err) => {
      console.log(err.message);
  });


 // App router
app.use("/users",userRouter);
app.use("/courses",courseRouter);

app.listen(port,()=>{
    console.log(`app listening on port http://localhost:${port}`);
})
