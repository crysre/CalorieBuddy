import { Utensils } from "../assets/utensils"
import {Link} from "react-router-dom"
import { userStore } from "../store/userStores"
import { useEffect } from "react";


export const Navbar = ()=>{

    const userStores = userStore();
    const {checkToken, logOutUser} = userStores;

    useEffect(()=>{
        checkToken()
    },[])

    return <nav className=" bg-[#4A70A9] sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-800/70 "  >
        <div className=" container py-4 px-4 mx-auto relative lg:text-sm ">
           <div className="flex justify-center md:justify-between items-center" >
                <Link to={"/"} >
                <div className=" cursor-pointer flex justify-center items-center shrink-0">
                    <Utensils stroke="#8FABD4" fill="#4A70A9" className="" />
                    <span className="   ml-4 text-2xl text-[#EFECE3]  tracking-wider " >CalorieBuddy</span>
                </div>
                </Link>

                <div className="hidden ml-14 md:flex space-x-12" >
                    <Link
                    to={"/"}
                    className=" text-[#EFECE3]  hover:text-[#000000] "
                    >
                        Tracker
                    </Link>

                    <Link to={"/progress"}
                    className=" text-[#EFECE3]  hover:text-[#000000] "

                    >
                    Progress
                    </Link>

                    <Link to={"/foodlibrary"}
                    className=" text-[#EFECE3]  hover:text-[#000000] "

                    >
                    Food Library
                    </Link>
                </div>

                <div className="hidden md:flex justify-center items-center space-x-12" >
                    { userStores.isTokenValue?
                    <Link to={"/"} ><button onClick={()=>{logOutUser()}} className="bg-linear-to-r bg-[#8FABD4] text-[#000000] py-2 px-3 rounded-md" >Logout</button></Link>
                    :<Link to={"/auth"} ><button  className="bg-linear-to-r bg-[#8FABD4] text-[#000000] py-2 px-3 rounded-md" >Login</button></Link>
                    }

                </div>


            </div>
            
        </div>
    </nav>
}