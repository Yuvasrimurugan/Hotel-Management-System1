const express = require("express");

const router = express.Router();

const {
    register,
    login
} = require("../controllers/authController");


router.post("/register", register);

router.post("/login", login);


router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});
const authController = require("../controllers/authControllers");

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Logout
router.post("/logout", authController.logout);

// Forgot Password
router.post("/forgot-password", authController.forgotPassword);

// Reset Password
router.post("/reset-password", authController.resetPassword);

// Get Logged-in User
router.get("/profile", authController.getProfile);

// Update Profile
router.put("/profile", authController.updateProfile);


module.exports = router;