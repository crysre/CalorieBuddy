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

export const foodLibraryGet = async(req, res)=>{
    try{
        const foods = await FoodLibraryMoodel.find({})
        res.json({
            foods
        })

    }catch(err){
        console.log("error fetching data");
        
    }
}

