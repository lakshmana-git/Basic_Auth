import express from "express";
import mongoose  from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to DB......")
}).catch((error) => {
    console.error("Error connecting to DB:", error);
  });
const app = express()




app.listen(3000,()=>{
    console.log("Server Running on Port 3000!")
})