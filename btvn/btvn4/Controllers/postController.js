const Post = require("../Models/Post");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");

const createPost = asyncHandle(async (req, res) => {
    const {id} = req.params;  //userId
    const author = await User.findById(id);
    const {title,content} = req.body;
    const post = new Post({title,author,content});
    await post.save();
    res.send("Create post successfully");
 //   const newPost = await Post.create(req.body);
  //  res.json(post);
});

const getAllPost = asyncHandle(async (req, res) => {
    let posts = await Post.find().populate("author","name");
    res.json(posts);
});

const getPostByPostId = asyncHandle(async (req, res) => {
    let {id} = req.params;
    let post = await Post.findById(id).populate("author","name");
    res.json(post);
});

const getPostByUserId = asyncHandle(async (req, res) => {
    let id = req.params;
    let posts = await Post.find({author: id}).populate("author","name");
    console.log(posts);
    res.json(posts); 
});

module.exports={
    createPost,
    getAllPost,
    getPostByPostId,
    getPostByUserId,
}
