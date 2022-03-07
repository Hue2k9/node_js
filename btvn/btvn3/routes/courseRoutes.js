const express = require("express");
const courseRouter = express.Router();
const courseController = require("./../controllers/coursesController");

courseRouter
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);
  
courseRouter
  .route("/:id") 
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = courseRouter;
