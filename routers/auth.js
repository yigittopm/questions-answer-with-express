const express = require("express");
const router = express.Router();

const { getAccessToRoute } = require("../middlewares/authorization/auth");
const { register,tokentest } = require("../controllers/auth");

router.post("/register", register);
router.get("/tokentest",getAccessToRoute ,tokentest);

module.exports = router;