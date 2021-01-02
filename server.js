const express = require("express");
const dotenv = require("dotenv");

const routers = require("./routers/index");

// Environment Variables
dotenv.config({ path : "./config/env/config.env" });

const app = express();
const PORT = process.env.PORT;

/////// Routes Middleware
app.use("/api", routers);


// Listening Application
app.listen(PORT, () => {
    console.log(`Running port on : ${PORT} : ${process.env.NODE_ENV}`);
})