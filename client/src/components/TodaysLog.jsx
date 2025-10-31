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
        return <Card className=" p-4 w-full" >
            <span className="text-[#f4f1ce]" >{name}</span>
            <div className="flex justify-between" >
                <span className="text-[rgb(175,174,156)]" >{serving} .Qty</span>
                <Trash2 onClick={() => deleteItem(id)} stroke="rgb(175,174,156)" className="h-5 hover:stroke-[#7f1d1d] " />

            </div>

            <span className="text-[#ff9933]" >{calories * serving}  kcal</span>

        </Card>
    }

return <Card className="  h-110 mb-10 md:mt-8 py-5 px-5 w-full flex flex-col gap-4" >
         <div className="flex items-center gap-4" >
                <CalendarDays className="h-10" stroke="#fe9833" />
                <span className=" text-2xl font-bold text-[#f4f1ce]" >Today's Log</span>
            </div>
            <span className="text-xs text-[#afae9c] " >Friday, October 24, 2025</span>

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