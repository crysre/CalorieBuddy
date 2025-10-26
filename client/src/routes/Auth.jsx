import { Login } from "../components/Login"
import { OAuth } from "../components/OAuth"
import { Signup } from "../components/Signup"

export const Auth = ()=>{
    return <div className=" flex justify-center  container h-screen w-full" >
        <Login/>
        <OAuth/>
    </div>
}


