import axios from "axios";

const port = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

export const isToken = ()=>{
    if(token){
        return true;
    }else{
        return false
    }
}

export const logOut = ()=>{
    localStorage.setItem("token", "")
}

export const instance = axios.create({
    baseURL:`${port}`
})

if(token){
    instance.defaults.headers.common["token"] = token;
}