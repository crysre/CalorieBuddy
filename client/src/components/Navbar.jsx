import { Utensils } from "../assets/utensils"
import {Link} from "react-router-dom"


export const Navbar = ()=>{
    return <nav className=" sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-800/70 "  >
        <div className=" container px-4 mx-auto relative lg:text-sm ">
            <Link to={"/"} >
            <div className=" cursor-pointer flex justify-center items-center shrink-0">
                <Utensils stroke="#fe9833" className="  mr-4" />
                <span className="text-2xl text-[#8a8983] tracking-wider  hover:text-[#FEAC5C]" >CalorieBuddy</span>
            </div>
            </Link>

            <div className="hidden lg:flex space-x-12" >
                <Link>
                
                </Link>

                <Link>

                </Link>

                <Link>

                </Link>
            </div>
            
        </div>
    </nav>
}