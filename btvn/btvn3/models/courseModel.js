const mongoose = require("mongoose");

// create schema
const courseSchema = new mongoose.Schema({
    title: String,
    price: Number,
    teacher: String,
});
// create model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;