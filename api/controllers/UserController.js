const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");

//update user
const updateUser = async (req, res) => {
  const { id, password, isAdmin } = req.body;
  if (id === req.params.id || isAdmin) {
    if (password) {
      try {
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("you can update only your account");
  }
};

//delete user
const deleteUser = asyncHandler(async (req, res) => {
  const { id, isAdmin } = req.body;
  if (id === req.params.id || isAdmin) {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(`${user.name}'s account has been deleted`);
  } else {
    return res.status(403).json("you can delete only your account");
  }
});

//get a user
const getUser = asyncHandler(async (req, res) => {
  const userId = req.query.id;
  const id = req.params.id;

  const user = userId ? await User.findById(userId) : await User.findById(id);

  // const { password, updatedAt, ...other } = user._docs;

  res.status(200).json(user);
});

//follow a user
const followUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (id !== req.params.id) {
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(id);
    if (!user.followers.includes(id)) {
      await user.updateOne({ $push: { followers: id } });
      await currentUser.updateOne({ $push: { followings: id } });
      res.status(200).json("user has been followed");
    } else {
      res.status(403).json("you already follow this person");
    }
  } else {
    res.status(403).json("you can't follow your self");
  }
});

//unfollow a user
const unfollowUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (id !== req.params.id) {
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(id);
    if (user.followers.includes(id)) {
      await user.updateOne({ $pull: { followers: id } });
      await currentUser.updateOne({ $pull: { followings: id } });
      res.status(200).json("user has been unfollowed");
    } else {
      res.status(403).json("you don't this person");
    }
  } else {
    res.status(403).json("you can't unfollow your self");
  }
});

module.exports = { updateUser, deleteUser, getUser, followUser, unfollowUser };
