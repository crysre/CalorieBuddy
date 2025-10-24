import { BicepsFlexed, Droplets, Flame, Target, Wheat } from "lucide-react"
import { Card } from "./Card"

function InfoCard({icon:Icon, color, name}){
    return <Card className={" flex flex-col gap-5 w-full p-4"} >
        <div className="flex items-center gap-1" >
                <Icon className="h-5" stroke={color} />
                <span className=" text-xs text-[#afae9c]" >{name}</span>
            </div>
            <span className="text-2xl" >27.0 g</span>
    </Card>
}

export const DailyProgress = ()=>{
    
    return <Card className=" h-90 p-5 w-full md:w-[69%] flex flex-col gap-4">
            <div className="flex items-center gap-4" >
                <Target className="h-10" stroke="#fe9833" />
                <span className=" text-2xl font-bold text-[#f4f1ce]" >Daily Progress</span>
            </div>
            <span className="text-xs text-[#afae9c] " >Your nutritional intake for today against your goal.</span>

            <div className="flex justify-between text-sm " >
                <span className="text-[#f4f1ce]" >Calorie Intake</span>
                <span className=" flex text-[#afae9c]" > <Flame className="h-5" stroke="#f87317" /> 85/2000 kcal</span>
                
            </div>
            
            <div className=" w-full h-3 rounded-full bg-[#984c00]" >
                    <div className="bg-[#fe9833] h-full rounded-full w-[20%] " >
                        
                    </div>
                </div>

                <span className="font-bold text-md text-[#f4f1ce]" >Macronutrients</span>

    
                    <div className="flex h-full gap-5" >
                        <InfoCard icon={BicepsFlexed} color="#3a82f7" name="Protein" />
                        <InfoCard icon={Wheat} color="#eab209" name="Carbs" />
                        <InfoCard icon={Droplets} color="#ee4445" name="Fat" />
                    </div>

                
        
        </Card>
}