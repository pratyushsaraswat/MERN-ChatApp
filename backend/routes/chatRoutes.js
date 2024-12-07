// backend/routes/chatRoutes.js
const express = require("express");
const { 
  accessChat, 
  fetchChats, 
  createGroupChat, 
  renameGroup, 
  removeFromGroup, 
  addToGroup 
} = require("../controllers/chatControllers"); // Import all required functions
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Define routes for accessing chats
router.route("/").post(protect, accessChat).get(protect, fetchChats); // Combine POST and GET for the root route

router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
