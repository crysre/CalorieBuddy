
import { Card } from "../components/Card"
import {UtensilsCrossed, CirclePlus} from "lucide-react"
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";
        




export const MealLogger = ()=>{

    
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Roti (Chapati) (1 medium) - 85 kcal', code: 'NY' },  
        { name: 'Basmati Rice (Cooked) (1 cup) - 205 kcal', code: 'RM' },
        { name: 'Dal Tadka (1 cup) - 180 kcal', code: 'LDN' },
        { name: 'Paneer Butter Masala (1 cup) - 350 kcal', code: 'IST' },
        { name: 'Chicken Curry (1 cup) - 300 kcal', code: 'PRS' }
    ];

    return <Card className=" p-5 w-fullmd:mr-5 md:w-[28%] flex flex-col gap-4">
            <div className="flex items-center gap-4" >
                <UtensilsCrossed className="h-10" stroke="#fe9833" />
                <span className=" text-2xl font-bold text-[#f4f1ce]" >Log Your Meal</span>
            </div>
            <span className="text-xs text-[#afae9c] " >Add a food item to your daily log.</span>
            <div className="flex flex-col gap-4 card justify-content-center" >
                <span className="text-[#f4f1ce]" >Food Item</span>
                <Dropdown 

                 pt={{
                    panel: { className: "  bg-black border border-neutral-700" },
                    item: { className: " pl-10 py-2 bg-black text-[#f4f1ce] hover:bg-neutral-800" },
                }}


                value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a food item" className="  rounded-md bg-black border border-neutral-700 h-10 flex justify-center items-center text-[#f4f1ce] z-50 px-4 w-full md:w-14rem"  />
                 
                 
                 <span className="text-[#f4f1ce]" >Servings</span>
                    <input className=" focus:border-[#fe9833] focus:outline focus:outline-[#fe9833] rounded-md p-2 text-[#f4f1ce] bg-black border border-neutral-700" placeholder="Enter serving amount" type="number" id="tentacles" name="tentacles" min="10" max="100" />
                <button className=" py-2 rounded-md flex justify-center items-center bg-[#fe9833] text-black" >
                    <CirclePlus className="h-4" />
                    <span>Add Meal</span>
                </button>
            </div>
        </Card>
}

 