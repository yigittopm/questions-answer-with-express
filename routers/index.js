const express = require("express");
const router = express.Router();

const questionRouter = require("./question");
const authRouter = require("./auth");

router.use("/questions", questionRouter);
router.use("/auth", authRouter);

module.exports = router;