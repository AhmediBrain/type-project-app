//import express from 'express'
const express = require('express')
//import cors from 'cors'
const cors = require('cors')
//import authRouter from './routes/auth.js'
const authRouter = require('./routes/auth')

const app = express();
app.use(express.json())
app.use(cors())

app.use("/auth", authRouter)

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(err)
    res.status(err.status || 500);
    return res.json({
        message: err.message,
        error: err
    });
});

export default app;