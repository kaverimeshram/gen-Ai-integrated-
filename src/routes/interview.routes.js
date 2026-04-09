const express = require("express");
const { authUser } = require("../middlewares/auth.middleware");
const upload = require("../middlewares/file.middleware");

const {
  generateInterViewReportController,
} = require("../controllers/interview.controller");

const router = express.Router();

// ✅ ONLY THIS ROUTE (others removed)
router.post(
  "/",
  authUser,
  upload.single("resume"),
  generateInterViewReportController
);

module.exports = router;