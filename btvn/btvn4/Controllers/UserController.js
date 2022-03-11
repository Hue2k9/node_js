const User = require("../Models/User");
const Post = require("../Models/Post");
const asyncHandle = require("../Middlewares/asyncHandle");

const getAllUsers = asyncHandle(async (req, res) => {
    let posts = await Post.find();
    let users = await User.find().populate("post");
   // let posts = await Post.find().populate("author");
    res.json(users);
});

const getUser = asyncHandle(async (req, res) => {
    let {id}= req.params;
    let user = await User.findById(id);
    res.json(user);
});

const findByAge = asyncHandle(async (req, res) => {
    let users = await User.find({age: {$gt: 18, $lt: 40}});
    res.json(users);
});

const addUser = asyncHandle(async (req, res) => {
    await User.create(req.body);
    res.status(201).send("Add user successfully!");
});

const updateUser = asyncHandle(async (req, res) => {
    let {id} = req.params;
    let user = await User.findByIdAndUpdate(id, req.body);
    res.json(user);
})

const deleteUser = asyncHandle(async (req, res) => {
    let {id} = req.params;
    await User.findByIdAndDelete(id);
    res.send("Delete successful!");
})

module.exports = {
    addUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
    findByAge,
};
