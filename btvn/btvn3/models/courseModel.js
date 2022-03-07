const mongoose = require("mongoose");

// create schema
const courseSchema = new mongoose.Schema({
    name: String,
    leader: String,
    price: Number,
    year: Number,
});
// create model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;