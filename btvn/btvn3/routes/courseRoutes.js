const express = require("express");
const courseRouter = express.Router();

const courseController = require("../controllers/coursesController");
const controllers = require("../controllers/coursesController");

courseRouter
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);
  //.delete(courseController.deleteCourse)
  //.put(courseController.updateCourse);

courseRouter.get("/:id", courseController.getCourse);
//courseRouter.get("/", courseController.getAllCourses);
courseRouter.put("/:id", courseController.updateCourse);
courseRouter.delete("/:id", courseController.deleteCourse);

module.exports = courseRouter;
