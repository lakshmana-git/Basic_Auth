import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs'



const signup = async(req,res)=>{
         const {username,email,password} = req.body
       
         let BcrypPassord = bcrypt.hashSync(password,10)
         const newUser = new userModel({username,email,password:BcrypPassord})
         try{
            await newUser.save()
            res.status(201).json({
               message:"user signed In"
            })
         }catch(error){
           res.status(500).json(error.message)
         }
         
         //wait untill the action done
         

}


export default signup