import { TrackerModel } from "../model/db.js";


export const handleGetFood = async(req, res)=>{
    const userId = req.userId;
    const date = new Date().toISOString().split("T")[0];

    const tracker = await TrackerModel.find({
        userId
    })

    res.json({
        tracker
    })

}

export const handleFoodPost = async(req, res)=>{

    const { foods} = req.body;

    console.log(foods, "I'm foods");
    

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

    await tracker.save()

    res.json({
        message: "Entry Made"
    })


 
}

export const handleFoodDelete = async(req, res)=>{

    const {foodId} = req.body;
    console.log(foodId);
    
    const date = new Date().toISOString().split("T")[0];
    const userId = req.userId;


        const tracker = await TrackerModel.findOne({
            userId,
            // date
        })

        if(!tracker){
            return res.status(400).json({
                message: "Entry not found"
            })
        }

        tracker.foods = tracker.foods.filter(food=> food._id.toString() !== foodId);

        await tracker.save()

        res.json({
            message:"Deleted item"
        })
   

}