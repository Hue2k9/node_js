const Post = require("../Models/Post");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");

const createPost = asyncHandle(async (req, res) => {
    const newPost = await Post.create(req.body);
    res.json(newPost);
    console.log(newPost);
    const {id} = req.params;
    const user = await User.findById(id);
    console.log(user.posts);
    user.posts.push(...newPost);
    console.log(user);
});

const getAllPost = asyncHandle(async (req, res) => {
    let posts = await Post.find().populate("author");
    res.json(posts);
});

const getPostByPostId = asyncHandle(async (req, res) => {
    let {id} = req.params;
    let post = await Post.findById(id);
    res.json(post);
});

const getPostByUserId = asyncHandle(async (req, res) => {
    let id = req.params.author.ObjectId;
    let posts = await Post.findById(id);
    res.json(posts); 
});

module.exports={
    createPost,
    getAllPost,
    getPostByPostId,
    getPostByUserId,
}