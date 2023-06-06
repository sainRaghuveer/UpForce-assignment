const express = require('express');
const controller = require("../controllers/user.controller");

//Creating routes with express routes
const userRouter = express.Router();


/*-------------------- New user post Route -----------------------*/
userRouter.post("/user", controller.postUser);


/*-------------- All user get Route with pagination --------------*/
userRouter.get("/user/page/:page", controller.getUser);

module.exports={
    userRouter
}