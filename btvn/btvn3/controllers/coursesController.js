//const Course = require("../../../NodeJS_HIT/models/courseModel");
const courses = require("../database/courses");
const Course = require("../models/courseModel");
const getAllCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};

const getCourse = async (req, res) => {
    const {id} = req.params;
    const course = await Course.findById(id);
    res.json(course);
};

const createCourse = async (req, res) => {
    const newCourse = await Course.create(req.body);
    res.json(newCourse);
};

const updateCourse = async (req, res) => {
    let {id} = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body);
    res.json(course);
};

const deleteCourse = async (req, res) => {
   let {id} = req.params;
   const course = await Course.findByIdAndDelete(id);
   res.json(null);
};

module.exports = {
   getAllCourses,
   createCourse,
   updateCourse,
   deleteCourse,
   getCourse,
};







