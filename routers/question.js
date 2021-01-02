const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("Questions Home")
})

router.get("/delete", (req,res) => {
    res.send("Questions Delete Page")
})

module.exports = router;