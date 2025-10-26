import axios from "axios";

const token = localStorage.getItem("token")

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

const instance = axios.cre