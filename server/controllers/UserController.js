import {email, z} from "zod";
import { UserModel } from "../model/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const handelLogin = async(req, res)=>{
    const requiredBody = z.object({
        email: z.string().min(3).max(50),
        password: z.string().min(6).max(50)
    })
    const parsedData = requiredBody.safeParse(req.body)

    if(!parsedData.success){
        res.status(404).json({
        message: "invalid credentials"    
        })
    }

    
    const {email, password} = parsedData.data;

    try{
        const user = await UserModel.findOne({
            email
        })

        const isCorrectPassword = await bcrypt.compare(password, user.password)

        if(isCorrectPassword){
            const token = jwt.sign({id:user._id}, process.env.SECRET)
            res.json({
            message: "You're logged in",
            token
        })
        }else{
            res.json({
                message:"Wrong password"
            })
        }
        
    }catch(e){
        console.log(e);
        
    }
}

export const handelSignup = async(req, res)=>{
    const requiredBody = z.object({
        email: z.string().min(3).max(50),
        firstName: z.string().min(1).max(100),
        lastName: z.string().min(2).max(50),
        password: z.string().min(6).max(50)
    })
    
    const parsedData = requiredBody.safeParse(req.body)

    if(!parsedData.success){
        res.status(404).json({
        message: "invalid credentials"    
        })
    }

    const {email, firstName, lastName, password} = parsedData.data;

    const hashedPassword = await bcrypt.hash(password, 5);
    

    

    try{
        UserModel.create({
            email,
            firstName,
            lastName,
            password: hashedPassword
        })

        res.json({
            message: "You're signed up"
        })


    }catch(e){
        res.status
    }



    
}