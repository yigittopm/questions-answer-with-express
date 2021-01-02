const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required : [true, "Please provide a name."]
    },
    email : {
        type : String,
        required : true,
        unique : [true, "Please try different email."],
        match : [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email."
        ]
    },
    role : {
        type : String,
        default : "user",
        enum : ["user", "admin"]
    },
    password : {
        type : String,
        minlength : [6,"Please provide a password with min length : 6"],
        required : [true, "Please provide a password."],
        select : false // Veri çekerken şifre görünmesin diye
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    title : {
        type : String 
    },
    about : {
        type : String
    },
    place : {
        type : String
    },
    website : {
        type : String
    },
    profile_image : {
        type : String,
        default : "default.jpg"
    },
    blocked : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model("User", UserSchema);