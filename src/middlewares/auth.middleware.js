const jwt = require("jsonwebtoken");
const tokenblacklistModel = require("../models/blacklist.model");

async function authUser(req, res, next) {
  try {
    console.log("COOKIES:", req.cookies);

    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        message: "Token not provided",
      });
    }

    const isBlacklisted = await tokenblacklistModel.findOne({ token });

    if (isBlacklisted) {
      return res.status(401).json({
        message: "Token is invalid",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    console.error("AUTH ERROR:", err.message);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = { authUser };