import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.SECRET;

export const auth = (req, res, next)=>{
    // console.log(req.headers.token);
    
    const token = req.headers.token;

    try{
        const decoded = jwt.verify(token, JWT_SECRET) 
        req.userId = decoded.id //The object id is going here that I put in while logging in
        next()
    }catch(err){
        console.error("Jwt verification failed", err.message);
        return res.status(403).json({ message: "Invalid or expired token" });

    }




    // if(!decoded){
    //     res.status(404).json({
    //         message:"Not authorized"
    //     })
    // }else{
    //     req.userId = decoded.id //The object id is going here that I put in while logging in
    //     next()
    // }



}