import { z} from "zod";
import { UserModel } from "../model/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";



const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)







export const handelOAuth = async(req, res)=>{
    const {token} = req.body;

     try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,               //const token = jwt.sign({id:user._id}, process.env.SECRET)
    });

    const payload = ticket.getPayload();
    const {email, name, picture, sub} = payload;

    let user = await UserModel.findOne({email})

    if(!user){
        user = await UserModel.create({
            email,
            firstName: name.split(" ")[0] || name,
            lastName: name.split(" ")[1] || "",
            
        })
    }


    const appToken = jwt.sign(
        {id:user._id}, process.env.SECRET
    );

    res.json({
      message: "Login successful",
      user: { email, name, picture },
      token: appToken,
    });


}catch(e){
    console.log(e);
    res.status(401).json({ message: "Invalid Google token" })
}

}

export const handelLogin = async(req, res)=>{
    const requiredBody = z.object({
        email: z.string().min(3).max(50),
        password: z.string().min(6).max(50)
    })
    const parsedData = requiredBody.safeParse(req.body)

    if(!parsedData.success){
    return res.status(404).json({ message: "invalid credentials" });
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
        await UserModel.create({
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