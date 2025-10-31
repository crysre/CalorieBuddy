import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { handleFoodDelete, handleFoodPost, handleGetFood } from "./controllers/FoodController.js";
import { handelLogin, handelOAuth, handelSignup } from "./controllers/UserController.js";
import { auth } from "./middleware/auth.js";
import { foodLibraryGet, foodLibraryPost } from "./controllers/FoodLibraryController.js";
import cors from "cors";




const app = express();
dotenv.config();
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;


app.post("/signup", handelSignup)
app.post("/login", handelLogin)
app.post("/oauth", handelOAuth)


app.post("/food",auth, handleFoodPost)
app.delete("/food", auth, handleFoodDelete)
app.get("/food", auth, handleGetFood)

app.post("/foodLibrary", foodLibraryPost )
app.get("/foodLibrary", foodLibraryGet)


async function main(){

    await mongoose.connect(mongoUrl);

    app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})
}

main();