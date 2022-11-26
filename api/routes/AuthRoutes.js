const express = require("express");
const { register, login } = require("../controllers/AuthController");

const router = express.Router();

router.post("/api/register", register);
router.post("/api/login", login);

module.exports = router;
