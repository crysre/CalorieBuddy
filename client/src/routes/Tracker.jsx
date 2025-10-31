import { useEffect } from "react";
import { DailyProgress } from "../components/DailyProgress";
import { MealLogger } from "../components/MealLogger";
import { TodaysLog } from "../components/TodaysLog";
import { FoodStore } from "../store/foodStores";
        





export const Tracker = ()=>{

    let store = FoodStore()

    useEffect(()=>{
        async function fetchFoodsall(){
            await store.fetchFoods()
            
        }
        fetchFoodsall()
    },[])

    useEffect(()=>{
        console.log(store.foods, "zustand is working");
    },[store.foods])

    
    

    return <div className="flex md:justify-between flex-col flex-wrap md:flex-row" >
        
      
            <MealLogger/>
            
            <DailyProgress/>
            <TodaysLog/>
      
   
    </div>
}













