const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userController");

const router = express.Router();

// POST /api/user/register
router.post("/register", registerUser);

// POST /api/user/login
router.post("/login", authUser);

// GET /api/user
router.get("/", allUsers);

module.exports = router;
