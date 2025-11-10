import {create} from "zustand";
import axios from "axios";
import { isToken } from "../api/axios";

export const userStore = create((set)=>({
isTokenValue:false,
checkToken:()=>{
    const res = isToken()
    set({isTokenValue:res})
},

logOutUser: ()=>{
    localStorage.setItem("token", "")
    set({isTokenValue:false})

},
logInUser: ()=>{
    set({isTokenValue:true})

}
}))