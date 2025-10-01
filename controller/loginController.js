import { response } from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const login = async(req, res) =>{
    
try {
 const {email, password } = req.body;

 if(!email || !password){
    return res.send({
    message:"Please fill the all required field",
    success:false,
    });
 }
 
     const checkexistuser = await UserModel.findOne({email});
     if(!checkexistuser){
         return res.send({message:"User does-not exist ",success:false})
     }

     const checkpassword = await bcrypt.compare(password,checkexistuser.password)
      if(!checkpassword){
        return res.send({
            message:"password is incorrect",
            success:false
        });
      }

      const token = await jwt.sign({id:checkexistuser._id},process.env.TOKEN_SECRET)
          if(!token){
        return res.send({message:"Token is not created",success:false})
    }

return res.cookie("token", token, {
  httpOnly: true
}).send({
  message: "User Login- Successfully",
  user:checkexistuser,
  success: true,
    token: token
});
}
catch (error) {
    console.log(error);
 return res.send({message:error.message,success: false});
    }
}