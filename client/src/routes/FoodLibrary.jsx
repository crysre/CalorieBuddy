import { BookOpenText, CirclePlus } from "lucide-react"
import { Card } from "../components/Card"
import BasicTable from "../components/Table"
import { useEffect } from "react"
import { FoodLibraryStore } from "../store/foodStores"

export const FoodLibrary = ()=>{

    const foodLibraryStore= FoodLibraryStore()

    useEffect(()=>{
        async function fetchFoodLibrary() {
            await foodLibraryStore.fetchFoods()
            
        }
        fetchFoodLibrary()
    },[])

    useEffect(()=>{
        console.log(foodLibraryStore.foods, "food library is working");
        
    })



    return <Card className=" w-full h- flex p-5 flex-col" >
        <div className="flex justify-between " >
            <div className="flex gap-2 justify-center items-center" >
                <BookOpenText stroke="#fe9833" />
                <span className=" font-bold text-[#f4f1ce] text-2xl" >Food Library</span>
            </div>
            <button className=" w-50 py-2 rounded-md flex justify-center items-center bg-[#fe9833] text-black" >
                    <CirclePlus className="h-4" />
                    <span>Add Meal</span>
                </button>
        </div>
        <span className="text-xs text-[#afae9c]" >Manage your custom food items here. These items will be available in the meal logger</span>
        <div  >
            <BasicTable  />
        </div>

        
    
    </Card>
}