import {create} from "zustand";
import axios from "axios";
import { instance } from "../api/axios";

export const FoodStore = create((set, get)=>({
    foods:null,
    fetchFoods:async()=>{
        try{
            const res = await instance.get("/food")
            console.log(res, "ifs");
            
        set({
            foods:res.data.tracker[0].foods
        })
        }catch(e){
            console.log(e);
            
        }
    },
    mealLoggerForm:{},
    updateMealLoggerForm:(key, value)=>{
        set((state)=>({
            mealLoggerForm:{
                ...state.mealLoggerForm,
                [key]:value
            }
        }))
    },
    addMealLogger: async () => {
  try {
    const form = get().mealLoggerForm;
    const food = form.foods;

    if (!food) {
      console.log("No food selected");
      return;
    }

    const foodData = {
      name: food.name,
      quantity: Number(form.quantity) || 0,
      nutrients: {
        calories: food.calories,
        protein: food.protein,
        carbs: food.carbs,
        fat: food.fat
      }
    };

    const res = await instance.post("/food", { foods: [foodData] });
    console.log(res, "meal logger axios post res");

    await get().fetchFoods();
    set({ mealLoggerForm: {} });
  } catch (e) {
    console.log(e);
  }
},
deleteMealLogger: async (foodId)=>{
    try{
        const item = await instance.delete("/food",{
            data:{foodId}
        })
        console.log(item.data);
        
        await get().fetchFoods();
        
        
    }catch(e){
        console.log(e);        
    }
}



}))

export const FoodLibraryStore = create((set)=>({
    foods:null,
    fetchFoods:async()=>{
        try{
            const res = await instance.get("/foodlibrary")
            console.log(res, "iffoodlibrary is working");
            
        set({
            foods:res.data.foods
        })
        }catch(e){
            console.log(e);
            
        }
    }

}))