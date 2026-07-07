console.log("✅ auth.routes.js loaded");

const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  getMe,
} = require("../controllers/auth.controller");

console.log({
  register,
  login,
  forgotPassword,
  resetPassword,
  getMe,
});

const auth = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);


router.get("/test-reset", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Test route working",
  });
});

router.post("/reset-password/:token", resetPassword);

router.get("/me", auth, getMe);

module.exports = router;