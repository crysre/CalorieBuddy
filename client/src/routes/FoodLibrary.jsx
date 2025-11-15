import { BookOpenText, CirclePlus } from "lucide-react"
import { Card } from "../components/Card"
import BasicTable from "../components/Table"
import { useEffect } from "react"
import { FoodLibraryStore } from "../store/foodStores"

export const FoodLibrary = ()=>{

    const foodLibraryStore= FoodLibraryStore()
    const {foodBoxStatus, setAddFoodBoxStatus, updateaddFoodForm, addFoodLibrary} = foodLibraryStore

    useEffect(()=>{
        async function fetchFoodLibrary() {
            await foodLibraryStore.fetchFoods()
            
        }
        fetchFoodLibrary()
    },[])

    useEffect(()=>{
        console.log(foodLibraryStore.foods, "food library is working");
        
    })

     async function submitFoodLibrary(e){
        e.preventDefault();
        
        await addFoodLibrary()
    
        
        
    }


    return <Card className="  w-full h- flex p-5 flex-col" >
        <div className=" relative flex justify-between " >
            <div className="flex gap-2 justify-center items-center" >
                <BookOpenText stroke="#8FABD4" />
                <span className=" font-bold text-[#f4f1ce] text-2xl" >Food Library</span>
            </div>
            <button onClick={()=>{setAddFoodBoxStatus()}} className=" w-50 py-2 rounded-md flex justify-center items-center bg-[#8FABD4] text-black" >
                    <CirclePlus className="h-4" />
                    <span>Add Meal</span>
                </button>
        </div>
        <span className="text-xs text-[#afae9c]" >Manage your custom food items here. These items will be available in the meal logger</span>
        <div  >
            <BasicTable  />
        </div>

        {foodBoxStatus && <Card className=" shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4" >
            <div className="flex flex-col" >
            <span className=" text-2xl font-bold" >Add food</span>
            <span className="text-xs " >Enter details of the food below</span>
        </div>

        <div className="flex flex-col gap-4 justify-center" >
                    <input onChange={(e)=>{updateaddFoodForm("name",e.target.value)}}  className=" focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Name" type="text" id="tentacles" name="tentacles"  />
                    <div className="flex justify-center">
                        
                    <input onChange={(e)=>{updateaddFoodForm("calories",e.target.value)}}  className=" flex-1 focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Calories (kcal)" type="number" id="tentacles" name="tentacles"  />
                    <input onChange={(e)=>{updateaddFoodForm("serving",e.target.value)}}  className=" flex-1 focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Serving size" type="text" id="tentacles" name="tentacles"  />
                    </div>
                    <div className="flex">
                    <input onChange={(e)=>{updateaddFoodForm("protein",e.target.value)}}  className=" focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Protein" type="number" id="tentacles" name="tentacles"  />
                    <input onChange={(e)=>{updateaddFoodForm("carbs",e.target.value)}}  className=" focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Carbs" type="number" id="tentacles" name="tentacles"  />
                    <input onChange={(e)=>{updateaddFoodForm("fat",e.target.value)}}  className=" focus:border-black focus:outline focus:outline-black rounded-md p-2  bg-[#8FABD4] border border-neutral-700" placeholder="Fat" type="number" id="tentacles" name="tentacles"  />
                    </div>

                    <div className="flex gap-2 justify-end ">
                        <button onClick={()=>{setAddFoodBoxStatus()}}  className=" px-2 py-2 rounded-md flex justify-center items-center bg-[#8FABD4]" >
                    <span>Cancel</span>
                </button>

                <button type="submit" onClick={submitFoodLibrary}   className=" px-14 py-2 rounded-md flex justify-center items-center bg-[#8FABD4]" >
                    <span>Add</span>
                </button>
                        
                    </div>


        </div>

        </Card>}
        
    </Card>
}


