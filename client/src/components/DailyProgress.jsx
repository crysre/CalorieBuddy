import { BicepsFlexed, Droplets, Flame, Target, Wheat } from "lucide-react"
import { Card } from "./Card"
import { FoodStore } from "../store/foodStores"
import { useEffect } from "react"

function InfoCard({icon:Icon, color,value, name}){
    return <Card className={" flex flex-col gap-5 w-full p-4"} >
        <div className="flex items-center gap-1" >
                <Icon className="h-5" stroke={color} />
                <span className=" text-xs " >{name}</span>
            </div>
            <span className="text-2xl" >{value} g</span>
    </Card>
}

export const DailyProgress = ()=>{
    
    const getTotalNutrients = FoodStore((state) => state.getTotalNutrients);
    const totals = getTotalNutrients();
    const goal = 4000;
    const percentage = Math.min((totals.calories/goal)*100, 100)

    
    return <Card className=" h-90 p-5 w-full md:w-[69%] flex flex-col gap-4">
            <div className="flex items-center gap-4" >
                <Target className="h-10" stroke="#8FABD4" />
                <span className=" text-2xl font-bold" >Daily Progress</span>
            </div>
            <span className="text-xs " >Your nutritional intake for today against your goal.</span>

            <div className="flex justify-between text-sm " >
                <span className="" >Calorie Intake</span>
                <span className=" flex" > <Flame className="h-5" stroke="#8FABD4" /> {totals.calories}/{goal} kcal</span>
                
            </div>
            
            <div className=" w-full h-3 rounded-full bg-[#8FABD4]" >
                    <div style={{ width: `${percentage}%` }} className={`bg-[#000000] h-full rounded-full `} >
                        
                    </div>
                </div>

                <span className="font-bold text-md" >Macronutrients</span>

    
                    <div className="flex h-full gap-5" >
                        <InfoCard icon={BicepsFlexed} color="#8FABD4" value={totals.protein} name="Protein" />
                        <InfoCard icon={Wheat} color="#8FABD4" value={totals.carbs} name="Carbs" />
                        <InfoCard icon={Droplets} color="#8FABD4" value={totals.fat} name="Fat" />
                    </div>

                
        
        </Card>
}