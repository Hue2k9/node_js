const express= require("express");
//const courses = require("../database/courses");
const Course = require("../models/courseModel");
const courseRouter=express.Router();

const getAllCourses = async (req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json({
            status: "success",
            data: courses,
        });
    } catch(err){
        res.status(404).json({
            status: "fail",
            message:err,
        })
    }
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







