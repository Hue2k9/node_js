const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "users"},
    updated: { type: Date, default: Date.now},
    content: { type: String, required: true},
});

module.exports  = mongoose.model("posts", postSchema);

