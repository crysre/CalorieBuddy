import { DailyProgress } from "../components/DailyProgress";
import { MealLogger } from "../components/MealLogger";
import { TodaysLog } from "../components/TodaysLog";
        


export const Tracker = ()=>{


    return <div className="flex flex-col flex-wrap md:flex-row gap-5" >
        
      
            <MealLogger/>
            <DailyProgress/>
            <TodaysLog/>
      
   
    </div>
}













