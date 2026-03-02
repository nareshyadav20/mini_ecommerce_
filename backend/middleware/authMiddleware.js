const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json("No token, access denied");
    }

    const verified = jwt.verify(token, "secretkey");

    req.user = await User.findById(verified.id).select("-password");

    next();
  } catch (err) {
    res.status(401).json("Invalid Token");
  }
};

module.exports = authMiddleware;