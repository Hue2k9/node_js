const express = require("express");
const courseRouter = express.Router();
const courseController = require("./../controllers/coursesController");

courseRouter
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);
  
courseRouter
  .get("/:id", courseController.getCourse)
  .put("/:id", courseController.updateCourse)
  .delete("/:id", courseController.deleteCourse);

module.exports = courseRouter;
