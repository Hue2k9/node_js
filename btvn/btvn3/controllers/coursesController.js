const express= require("express");
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
    try{
        const {id} = req.params;
    const course = await Course.findById(id);
    res.json(course);
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

const createCourse = async (req, res) => {
    try{
        const newCourse = await Course.create(req.body);
    res.json(newCourse);
    } catch(err){
        res.status(404).json({
            status:"fail",
            message: err,
        });
    }
};

const updateCourse = async (req, res) => {
    try{
        let {id} = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body);
    res.send("Update sucessfully");
    } catch(err){
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

const deleteCourse = async (req, res) => {
   try{
    let {id} = req.params;
    const course = await Course.findByIdAndDelete(id);
    res.send("Delete Sucessfully");
   } catch (err){
       res.status(404).json({
           status: "fail",
           message: err,
       });
   }
};

module.exports = {
   getAllCourses,
   createCourse,
   updateCourse,
   deleteCourse,
   getCourse,
};







