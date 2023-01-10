const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require("./models/Users");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://useradmin:Bania%40107@cluster0.llsb5n3.mongodb.net/users');

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.post("/createUser", async (req, res) => {
    const iUser = req.body;
    const newUser = new UserModel(iUser);
    await newUser.save();

    res.json(iUser);
})

app.listen(5000, () => {
    console.log("Server is Running");
})