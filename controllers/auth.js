const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
    // POST DATA 
    const name = "Buket Kostem";
    const email = "bktkstm@gmail.com";
    const password = "65432";


    const user = await User.create({
        name,
        email,
        password
    })

    res
        .status(200)
        .json({
            success: true,
            data: user
        })
}

)

const testError = (req, res, next) => {
    return next(new CustomError("Custom Error", 400));
}

module.exports = {
    register,
    testError
}