//import express from 'express';
const express = require('express')
//import mongoose from 'mongoose';
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
//import cors from 'cors'
const UserModel = require("./models/Users");
//import UserModel from './models/Users.mjs';

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
// Old User Information (install bcryptjs)
    res.json(iUser);
})

app.listen(5000, () => {
    console.log("Server is Running");
})