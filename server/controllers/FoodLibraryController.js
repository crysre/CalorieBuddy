import { FoodLibraryMoodel } from "../model/db.js"

export const foodLibraryPost = (req, res)=>{
    const {name, calories, protein, carbs, fat, serving} = req.body
    try{
        FoodLibraryMoodel.create({
            name,
            calories,
            protein,
            carbs,
            fat,
            serving
        })
        res.json({
            message:"entry made"
        })
    }catch(e){
        console.log(e);        
    }
}


