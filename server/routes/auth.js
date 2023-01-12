//import express from 'express';
const express = require('express')
//import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt')
//import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken')

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
    let user = await User.findOne({_id: req.body._id})

    if(!user) return res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if(!validPassword) return res.status(400).send('Incorrect email or password');

    const token = jwt.sign({_id: user._id}, "secret") //process.env.TOKEN_SECRET
    console.log(token, 'any');

    res.header({"x-auth-token": token, "authorization": `Bearer ${token}`}).send(_.assign({token: token}, _.pick(user, ['username', 'email', 'password', 'confirm_password' ])))
})

export default authRouter;