const express = require("express");
const dotenv = require("dotenv");

const customErrorHandler = require("./middlewares/errors/customErrorHandler");

const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers/index");

// Environment Variables
dotenv.config({ path : "./config/env/config.env" });

// MongoDB Connection
connectDatabase();

const app = express();
const PORT = process.env.PORT;

/////// Routes Middleware
app.use("/api", routers);

// Error Handling
app.use(customErrorHandler);

// Listening Application
app.listen(PORT, () => {
    console.log(`Running port on : ${PORT} : ${process.env.NODE_ENV}`);
})