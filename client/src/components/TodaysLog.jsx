import { CalendarDays, Trash2 } from "lucide-react"
import { Card } from "./Card"
import { FoodStore } from "../store/foodStores"

export const TodaysLog = ()=>{

    const store = FoodStore()

    const {foods} = store;

    const {deleteMealLogger} = FoodStore()


    


    function LogCard({id,name, serving, calories}){
        function deleteItem(id){

            deleteMealLogger(id)
            
        }
        return <div className="border rounded-lg  border-neutral-700/80 backdrop-blur-lg bg-[#8FABD4]! p-4 w-full" >
            <span className="" >{name}</span>
            <div className="flex justify-between" >
                <span className="" >{serving} .Qty</span>
                <Trash2 onClick={() => deleteItem(id)} stroke="#000000" className="h-5 hover:stroke-[#ff0000] " />

            </div>

            <span className="" >{calories * serving}  kcal</span>

        </div>
    }

return <Card className="  h-110 mb-10 md:mt-8 py-5 px-5 w-full flex flex-col gap-4" >
         <div className="flex items-center gap-4" >
                <CalendarDays className="h-10" stroke="#8FABD4" />
                <span className=" text-2xl font-bold " >Today's Log</span>
            </div>
            <span className="text-xs " >Friday, October 24, 2025</span>

            <div className="w-full overflow-auto" >

                {foods?
                (foods.map((food)=>{
                    return <LogCard key={food._id} id={food._id} name={food.name} serving={food.quantity} calories={food.nutrients.calories} />
                })
                ):(
                    <div>Loading...</div>
                )
                }

                {/* <LogCard name="Butter Paneer Masala" serving="1 serving(s) • 1 cup per serving" calories="350" /> */}


            </div>

    </Card>
}