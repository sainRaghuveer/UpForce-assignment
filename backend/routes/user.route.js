const express = require('express');
const controller = require("../controllers/user.controller");

//Creating routes with express routes
const userRouter = express.Router();


userRouter.post("/user", controller.postUser);


module.exports={
    userRouter
}