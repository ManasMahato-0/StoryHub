import express from "express"
import zod from "zod"
import {User} from "../db.js";
import { JWT_SECRET } from "../config.js"
import pkg from "jsonwebtoken";
import bcrypt from "bcryptjs";
const { sign } = pkg;
const router=express.Router();

const signupbody=zod.object({
email:zod.string().email(),
fullName:zod.string(),
password:zod.string(),
})

router.post("/signup",async (req,res)=>{
    const validationResult = signupbody.safeParse(req.body);
    if(!req.body.email || !req.body.password || !req.body.fullName)
        {
            return res.status(400).json({
                message:"All fields are required"
            })
        }
        if (!validationResult.success) {
            return res.status(400).json({
                message: "Invalid input",
                errors: validationResult.error.format()
            });
        }
if(req.body.password.length<6)
{
    return res.status(400).json({
        message:"Password should be of atleast 6 characters"
    })
}
const existinguser=await User.findOne({
    email:req.body.email,
})
if(existinguser)
{
    return res.status(411).json(
        {
            message:"User Already Exists"
        }
    )
}
const salt=await bcrypt.genSalt(11)
const hashedpassword=await bcrypt.hash(req.body.password,salt)
const user=await User.create({
    email:req.body.email,
    password:hashedpassword,
    fullName:req.body.fullName
})
const userId=user._id
    const token=sign({
        userId
    },JWT_SECRET)
    res.json({
        message:"User Created Successfully",
        token:token,
        userId:userId
    })
})

const signinbody=zod.object({
    email:zod.string().email(),
    password:zod.string()
})

router.post("/signin",async (req,res)=>{
    const validationResult = signinbody.safeParse(req.body);
if(!req.body.email || !req.body.password)
{
    return res.status(400).json({
        message:"All fields are required"
    })
}
if (!validationResult.success) {
    return res.status(400).json({
        message: "Invalid input",
        errors: validationResult.error.format()
    });
}
const user=await User.findOne({
    email:req.body.email
})
if(user)
{
    const isCorrect=await bcrypt.compare(req.body.password,user.password)
    if(!isCorrect)
    {
        return res.status(400).json({
            message:"Invalid Credentials"
        })
    }
    const token=sign({
        userId:user._id
    },JWT_SECRET)
    res.json({
        token:token,
        userId:user._id
    })
    return
}
return res.status(411).json({
    message:"Error While Signing"
})
})

export default router