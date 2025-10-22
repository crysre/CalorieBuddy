import { TrackerModel } from "../model/db.js";

export const handleFoodPost = async(req, res)=>{

    const { foods} = req.body;

    const userId = req.userId;
   
    const date = new Date().toISOString().split("T")[0];

    const tracker = await TrackerModel.findOne({
        userId,
        date
    })



    if(!tracker){
        try{
        await TrackerModel.create({
        userId,
        date,
        foods
    })
    return res.json({
        message: "Entry made"
    })
    }catch(e){
        console.log(e);
        
    }
    }

    tracker.foods.push(...foods)

    tracker.save()

    res.json({
        message: "Entry Made"
    })


 
}