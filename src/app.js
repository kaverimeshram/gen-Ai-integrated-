const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const interviewRouter = require("./routes/interview.routes");
const authRouter = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:4173",
    credentials: true,
  })
);

// ✅ ROUTES
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;