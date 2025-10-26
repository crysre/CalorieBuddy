import { DailyProgress } from "../components/DailyProgress";
import { MealLogger } from "../components/MealLogger";
import { TodaysLog } from "../components/TodaysLog";
        


export const Tracker = ()=>{


    return <div className="flex md:justify-between flex-col flex-wrap md:flex-row" >
        
      
            <MealLogger/>
            <DailyProgress/>
            <TodaysLog/>
      
   
    </div>
}













