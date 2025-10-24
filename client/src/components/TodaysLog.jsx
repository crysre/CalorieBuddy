import { CalendarDays, Trash2 } from "lucide-react"
import { Card } from "./Card"

export const TodaysLog = ()=>{

    function LogCard({name, serving, calories}){
        return <Card className=" p-4 w-full" >
            <span className="text-[#f4f1ce]" >{name}</span>
            <div className="flex justify-between" >
                <span className="text-[rgb(175,174,156)]" >{serving}</span>
                <Trash2 stroke="rgb(175,174,156)" className="h-5 hover:stroke-[#7f1d1d] " />

            </div>

            <span className="text-[#ff9933]" >{calories}</span>

        </Card>
    }

return <Card className="  h-110 mb-10 py-5 px-5 w-full flex flex-col gap-4" >
         <div className="flex items-center gap-4" >
                <CalendarDays className="h-10" stroke="#fe9833" />
                <span className=" text-2xl font-bold text-[#f4f1ce]" >Today's Log</span>
            </div>
            <span className="text-xs text-[#afae9c] " >Friday, October 24, 2025</span>

            <div className="w-full overflow-auto" >
                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />

                <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350 kcal" />


            </div>

    </Card>
}