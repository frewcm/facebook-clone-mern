const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
} = require("../controllers/UserController");
const { protect } = require("../middleware/AuthMiddleware");

router.put("/api/users/:id", protect, updateUser);
router.delete("/api/users/:id", protect, deleteUser);
router.get("/api/users/:id", protect, getUser);
router.put("/api/users/:id/follow", protect, followUser);
router.put("/api/users/:id/unfollow", protect, unfollowUser);

module.exports = router;
