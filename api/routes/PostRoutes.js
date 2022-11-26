const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimeline,
  getUserPost,
} = require("../controllers/PostController");
const { protect } = require("../middleware/AuthMiddleware");

router.post("/api/posts", protect, createPost);
router.put("/api/posts/:id", protect, updatePost);
router.delete("/api/posts/:id", protect, deletePost);
router.post("/api/:id/like", protect, likePost);
router.get("/api/post/:id", protect, getPost);
router.get("/api/timeline/:id", protect, getTimeline);
router.get("/api/profile/:id", protect, getUserPost);

module.exports = router;
