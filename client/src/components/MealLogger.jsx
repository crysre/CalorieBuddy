
import { Card } from "../components/Card"
import {UtensilsCrossed, CirclePlus} from "lucide-react"
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from "react";
import { FoodLibraryStore, FoodStore } from "../store/foodStores";
        




export const MealLogger = ()=>{

    const store = FoodLibraryStore()
    const  {addMealLogger, mealLoggerForm,updateMealLoggerForm} = FoodStore()


    useEffect(() => {
  if (!store.foods) store.fetchFoods();
}, []);


    async function submitSelection(e){
        e.preventDefault();
        
        await addMealLogger()
    
        
        
    }


    return <Card className=" p-5 w-full md:mr-5 md:w-[28%] flex flex-col gap-4">
            <div className="flex items-center gap-4" >
                <UtensilsCrossed className="h-10" stroke="#8FABD4" />
                <span className=" text-2xl font-bold" >Log Your Meal</span>
            </div>
            <span className="text-xs " >Add a food item to your daily log.</span>
            <div className="flex flex-col gap-4 card justify-content-center" >
                <span className="" >Food Item</span>
                
                {store.foods?(
                    <Dropdown 

                 pt={{
                    panel: { className: " absolute border border-neutral-700" },
                    item: { className: " flex pl-4 py-2 bg-[#8FABD4]  hover:bg-[#EFECE3]" },
                }}


               value={mealLoggerForm.foods || null} onChange={(e) => updateMealLoggerForm("foods",e.value )} options={store.foods} optionLabel="name" 
                placeholder="Select a food item" className="  rounded-md bg-[#8FABD4] border border-neutral-700 h-10 flex justify-center items-center  z-50 px-4 w-full md:w-14rem"  />
                ): <div>Loading.....</div>
            } 
                 
                 <span className="" >Quantity</span>
                    <input onChange={(e)=>{updateMealLoggerForm("quantity",e.target.value)}}  className=" focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Enter quantity" type="number" id="tentacles" name="tentacles"  />
                <button type="submit" onClick={submitSelection} value={mealLoggerForm.quantity || ""} className=" py-2 rounded-md flex justify-center items-center bg-[#8FABD4]" >
                    <CirclePlus className="h-4" />
                    <span>Add Meal</span>
                </button>
            </div>
        </Card>
}

 