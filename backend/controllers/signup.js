import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js'



const signup = async(req,res,next)=>{
         const {username,email,password} = req.body
       
         let BcrypPassord = bcrypt.hashSync(password,10)
         const newUser = new userModel({username,email,password:BcrypPassord})
         try{
            await newUser.save()
            res.status(201).json({
               message:"user signed In"
            })
         }catch(error){
          
           next(error)
          //we can show custom error
         }
         
         //wait untill the action done
         

}


export default signup