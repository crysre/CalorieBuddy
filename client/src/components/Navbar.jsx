import { Utensils } from "../assets/utensils"
import {Link} from "react-router-dom"


export const Navbar = ()=>{
    return <nav className=" sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-800/70 "  >
        <div className=" container py-4 px-4 mx-auto relative lg:text-sm ">
           <div className="flex justify-center md:justify-between items-center" >
                <Link to={"/"} >
                <div className=" cursor-pointer flex justify-center items-center shrink-0">
                    <Utensils stroke="#fe9833" className="" />
                    <span className="   ml-4 text-2xl  tracking-wider text-[#FEAC5C]" >CalorieBuddy</span>
                </div>
                </Link>

                <div className="hidden ml-14 md:flex space-x-12" >
                    <Link
                    to={"/"}
                    className=" text-[#8a8983]  hover:text-[#FEAC5C] "
                    >
                        Tracker
                    </Link>

                    <Link to={"/progress"}
                    className=" text-[#8a8983]  hover:text-[#FEAC5C] "

                    >
                    Progress
                    </Link>

                    <Link to={"/foodlibrary"}
                    className=" text-[#8a8983]  hover:text-[#FEAC5C] "

                    >
                    Food Library
                    </Link>
                </div>

                <div className="hidden md:flex justify-center items-center space-x-12" >
                    <Link to={"/auth"} ><button className="bg-linear-to-r from-[#FE9833] to-[#884401] text-[#000000] py-2 px-3 rounded-md" >Login</button></Link>
                </div>


            </div>
            
        </div>
    </nav>
}