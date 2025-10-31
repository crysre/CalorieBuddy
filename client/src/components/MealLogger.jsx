
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
                <UtensilsCrossed className="h-10" stroke="#fe9833" />
                <span className=" text-2xl font-bold text-[#f4f1ce]" >Log Your Meal</span>
            </div>
            <span className="text-xs text-[#afae9c] " >Add a food item to your daily log.</span>
            <div className="flex flex-col gap-4 card justify-content-center" >
                <span className="text-[#f4f1ce]" >Food Item</span>
                
                {store.foods?(
                    <Dropdown 

                 pt={{
                    panel: { className: " absolute bg-black border border-neutral-700" },
                    item: { className: " flex pl-4 py-2 bg-black text-[#f4f1ce] hover:bg-neutral-800" },
                }}


               value={mealLoggerForm.foods || null} onChange={(e) => updateMealLoggerForm("foods",e.value )} options={store.foods} optionLabel="name" 
                placeholder="Select a food item" className="  rounded-md bg-black border border-neutral-700 h-10 flex justify-center items-center text-[#f4f1ce] z-50 px-4 w-full md:w-14rem"  />
                ): <div>Loading.....</div>
            } 
                 
                 <span className="text-[#f4f1ce]" >Quantity</span>
                    <input onChange={(e)=>{updateMealLoggerForm("quantity",e.target.value)}}  className=" focus:border-[#fe9833] focus:outline focus:outline-[#fe9833] rounded-md p-2 text-[#f4f1ce] bg-black border border-neutral-700" placeholder="Enter quantity" type="number" id="tentacles" name="tentacles"  />
                <button type="submit" onClick={submitSelection} value={mealLoggerForm.quantity || ""} className=" py-2 rounded-md flex justify-center items-center bg-[#fe9833] text-black" >
                    <CirclePlus className="h-4" />
                    <span>Add Meal</span>
                </button>
            </div>
        </Card>
}

 