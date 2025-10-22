import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { handleFoodDelete, handleFoodPost } from "./controllers/FoodController.js";
import { handelLogin, handelSignup } from "./controllers/UserController.js";
import { auth } from "./middleware/auth.js";
import { foodLibraryPost } from "./controllers/FoodLibraryController.js";




const app = express();
dotenv.config();
app.use(express.json())
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;


app.post("/signup", handelSignup)
app.post("/login", handelLogin)


app.post("/food",auth, handleFoodPost)
app.delete("/food", auth, handleFoodDelete)

app.post("/foodLibrary", foodLibraryPost )


async function main(){

    await mongoose.connect(mongoUrl);

    app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})
}

main();