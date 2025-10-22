import mongoose, {Schema, model} from "mongoose";

const User = new Schema({
    email:{type:String, unique:true, lowercase: true, required:true},
    firstName: String,
    lastName: String,
    password: {type: String, required: true},
    
})


const Nutrients = new Schema ({
    calories: {type:Number, default:0},
    protein: {type:Number, default:0},
    carbs: {type:Number, default:0},
    fat: {type:Number, default:0},
})

const Food = new Schema({
    name: {type:String, required:true},
    quantity: {type:Number, default:1},
    nutrients: Nutrients
})

const Tracker = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    date: {type: String, required:true, unique:false},
    // totalNutrients: Nutrients,
    foods: [Food]

})




export const TrackerModel = model("Tracker", Tracker);
export const UserModel = model("User", User);



