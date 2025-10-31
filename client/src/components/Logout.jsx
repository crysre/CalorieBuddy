import { useNavigate } from "react-router"
import { logOut } from "../api/axios"
import { Card } from "./Card"


export const Logout = ()=>{
     const navigate = useNavigate()
    function logOutHandler(){
        logOut()
        googleLogout()
        
    }
    return <Card className="h-10">
        <button onClick={logOutHandler} >Logout</button>
    </Card>
}