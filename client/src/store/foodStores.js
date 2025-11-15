import {create} from "zustand";
import axios from "axios";
import { instance } from "../api/axios";

export const FoodStore = create((set, get)=>({
    foods:null,
    weeklyCalories:[],
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
},

getTotalNutrients: () =>{
  const {foods} = get();

  if (!foods || !Array.isArray(foods) || foods.length === 0) {
    return { calories: 0, protein: 0, carbs: 0, fat: 0 };
  }
    let totalNutrients = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
    };
    foods.forEach((item) => {
        totalNutrients.calories += item.nutrients.calories * item.quantity;
        totalNutrients.protein += item.nutrients.protein * item.quantity;
        totalNutrients.carbs += item.nutrients.carbs * item.quantity;
        totalNutrients.fat += item.nutrients.fat * item.quantity;
    });
    return totalNutrients;
},
getWeeklyMeal: async ()=>{
  const date = new Date().toISOString().split("T")[0];
  for(let i = 0; i < 7; i++){
    let splittedDate = date.split("-")
    console.log(splittedDate);
    
  }

}



}))

export const FoodLibraryStore = create((set, get)=>({
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
    },
    foodBoxStatus:false,
    setAddFoodBoxStatus: ()=>{
      set((state)=>({
        foodBoxStatus: !state.foodBoxStatus
      }))
    },
    addFoodForm: {},
    updateaddFoodForm:(key, value)=>{
        set((state)=>({
            addFoodForm:{
                ...state.addFoodForm,
                [key]:value
            }
        }))
    },
    addFoodLibrary: async()=>{
      try{
        const form = get().addFoodForm;
        const name = form.name;
        if(!name){
          console.log("No item added");
          return
        }
        const foodData = {
          name: name,
          calories: form.calories,
          protein: form.protein,
          carbs: form.carbs,
          fat: form.fat
        };
        const res = await instance.post("/foodlibrary", foodData)
        console.log(res, "Foodlibrary posted");

        await get().fetchFoods();
        set({addFoodForm:{}})
        
      }catch(e){
        console.log(e, "error while posting foodlibrary");
        
      }

    }

}))