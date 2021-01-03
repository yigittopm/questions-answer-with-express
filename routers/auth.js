const express = require("express");
const router = express.Router();

const { register,testError } = require("../controllers/auth");

router.post("/register", register)
router.get("/error", testError);

module.exports = router;