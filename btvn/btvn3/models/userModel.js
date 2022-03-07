const mongoose = require("mongoose");

const userSchma = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
});

const user = mongoose.model("user", userSchma);
module.exports = user;