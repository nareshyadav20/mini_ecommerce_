const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// REGISTER
router.post("/register", authController.register);


// LOGIN
router.post("/login", authController.login);


// 🔐 PROFILE ROUTE (Protected)
router.get("/profile", async (req, res) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json("Access Denied");
    }

    const verified = jwt.verify(token, "secretkey");

    const user = await User.findById(verified.id).select("-password");

    res.json(user);

  } catch (error) {
    res.status(401).json("Invalid Token");
  }
});


module.exports = router;