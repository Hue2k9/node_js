const Post = require("../Models/Post");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");

const createPost = asyncHandle(async (req, res) => {
    let post = await Post.create(req.body);
    res.json(post);
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
    let {userId} = req.params;
    const user = await User.findById(userId).populate('posts');
    console.log(user)
    res.json({
        posts: (user.posts),
    });
});

module.exports={
    createPost,
    getAllPost,
    getPostByPostId,
    getPostByUserId,
}
