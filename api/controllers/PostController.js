const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");
const User = require("../models/UserModel");

//create a post
const createPost = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body);
  res.status(200).json(post);
});

//update a post
const updatePost = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const post = await Post.findByIdAndUpdate(req.params.id);
  if (post.userId === userId) {
    await post.updateOne({ $set: req.body });
    res.status(200).json("the post has been updated");
  } else {
    res.status(403).json("you can update only your post");
  }
});

//delete a post
const deletePost = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const post = await Post.findByIdAndUpdate(req.params.id);
  if (post.userId === userId) {
    await post.deleteOne();
    res.status(200).json("the post has been deleted");
  } else {
    res.status(403).json("you can delete only your post");
  }
});

//like and dislike a post
const likePost = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(userId)) {
    await post.updateOne({ $push: { likes: userId } });
    res.status(200).json("post has been liked");
  } else {
    await post.updateOne({ $pull: { likes: userId } });
    res.status(200).json("post has been disliked");
  }
});

//get a post
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json(post);
});

//get timeline posts
const getTimeline = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.params.id);
  const userPosts = await Post.find({ userId: currentUser.id });
  const friendPosts = await Promise.all(
    currentUser.followings.map((friendId) => {
      return Post.find({ userId: friendId });
    })
  );
  res.json(userPosts.concat(...friendPosts));
});

//get user's posts
const getUserPost = asyncHandler(async (req, res) => {
  const user = await User.find({ id: req.params.id });
  const posts = await Post.find({ userId: user._id });
  res.status(200).json({ posts });
});

module.exports = {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimeline,
  getUserPost,
};
