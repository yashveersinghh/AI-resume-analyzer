const mongoose = require("mongoose");

async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to Database");
    } catch (err) {
        console.warn("MongoDB connection failed. Starting server without a database connection.", err);
        return false;
    }
}


module.exports = connectToDB;