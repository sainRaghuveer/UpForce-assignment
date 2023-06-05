const express = require('express');
const cors= require('cors');
const { connection } = require('./configs/db');
require('dotenv').config();


//Created app 
const app = express();


//parsing configuration
app.use(express.json());


//to handle cross origin requests
app.use(cors());


//default route
app.get("/", (req, res)=>{
    res.send("Welcome to the UpForce backend ... 🪄");
});


//Server configuration
app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected with UpForce DB");
    }catch(error){
        console.log(error);
    }
    console.log(`Server is running at PORT ${process.env.port}`);
});