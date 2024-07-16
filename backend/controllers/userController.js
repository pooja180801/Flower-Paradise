import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

//login
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({
                success:false,
                message:"User does not exist"
            })
        }

        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({
                success:false,
                message:"Invalid credentials"
            })
        }

        const token=createToken(user._id);

        res.json({
            success:true,
            token:token
        })

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"Error"
        })
    }
}

//create token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//register
const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try {
        //checking whether user already exists
        const exists=await userModel.findOne({email})
        if(exists){
            return res.json({
                success:false,
                message:'User already exists!!'
            })
        }

        //vallidating email format and string pw
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:'Please enter a valid email'
            })
        }

        if(password.length<8){
            return res.json({
                success:false,
                message:'Password should have minimum of 8 characters'
            })  
        }

        //encrypt user pw
        const salt=await bcrypt.genSalt(10)  //5-15
        const encryptedPassword=await bcrypt.hash(password,salt)

        const newUser=new userModel({
            name:name,
            email:email,
            password:encryptedPassword
        })

        const user=await newUser.save();
        const token=createToken(user._id);
        res.json({
            success:true,
            token:token
        })


    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:"Error"
        })     
    }
}


export {loginUser,registerUser}