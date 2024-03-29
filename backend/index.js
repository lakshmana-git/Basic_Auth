import express from "express";
import mongoose  from "mongoose";
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'

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



// app.use(cors());
  
app.use(express.json())

app.use('/api/basicauth',userRoutes)
app.use('/api/auth',authRoutes)

app.listen(3000,()=>{ 
    console.log("Server Running on Port 3000!")
}) 



//middleware to show error
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Interal Server Error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode 
    })
})