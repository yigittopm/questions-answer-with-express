const mongoose = require("mongoose");

const connectDatabase = () => {

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongodb Connect Successful");
        }).catch(err => {
            console.log("Err : " + err);
        })
}

module.exports = connectDatabase;