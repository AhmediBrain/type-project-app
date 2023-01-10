const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: false,
    },
    password: {
        type: String | Number,
        require: false,
    },
    confirm_password: {
        type: String | Number,
        require: false,
    },  
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;