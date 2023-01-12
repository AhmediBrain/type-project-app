const mongoose = require('mongoose');
//import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String || Number,
        require: true,
    },
    confirm_password: {
        type: String || Number,
        require: true,
    },  
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;