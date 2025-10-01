import { response } from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const signup = async(req, res) => {
    const { name, email, password } = req.body;

    try{
    if (!email || !name || !password) {
        return res.send({ message: "please fill all the required field..", 
        success: false, 
    });
    }

    const checkexistuser = await UserModel.findOne({email});
    if(checkexistuser){
        return res.send({message:"USER ALREADY EXIST",success:false})
    }
     
    const salt  = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt);

    const newuser = new UserModel({
       name,
       email,
       password:hashpassword
    })

    await newuser.save();

   const token = await jwt.sign({_id:newuser.id},process.env.TOKEN_SECRET)
    console.log(token)

    if(!token){
        return res.send({message:"Token is not created",success:false})
    }

return res.cookie("token", token, {
  httpOnly: true
}).send({
  message: "User Signup - Successfully",
  user: newuser,
  success: true
});

}
     catch (error) {
 return res.send({message:error.message,success: false,});
    }
}














