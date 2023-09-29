import express from "express";
import mongoose  from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to DB......")
}).catch((error) => {
    console.error("Error connecting to DB:", error);
  });
const app = express()

app.use('/api/basicauth',userRoutes)


app.listen(3000,()=>{
    console.log("Server Running on Port 3000!")
}) 

