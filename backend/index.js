import express from "express";
import mongoose  from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import signupRoutes from './routes/auth.route.js'


//by default we cannot send json to server 
//so we use app.use(express.json())
//allow json data 
 
dotenv.config();

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to DB......")
}).catch((error) => {
    console.error("Error connecting to DB:", error);
  });
const app = express()

app.use(express.json())


app.use('/api/basicauth',userRoutes)
app.use('/api/basicauth',signupRoutes)

app.listen(3000,()=>{ 
    console.log("Server Running on Port 3000!")
}) 

