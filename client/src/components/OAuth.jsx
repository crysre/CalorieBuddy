import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { instance, logOut } from "../api/axios";





export const OAuth = ()=>{

    function handleLogout(){
        logOut()
        googleLogout()
    }

    const navigate = useNavigate()

    const handleLoginSuccess = async(credentialResponse)=>{
        const token = credentialResponse.credential;

        try{
            const res = await instance.post("/oauth", {token} )
            const data = res.data;
             console.log("Login successful:", data);
             localStorage.setItem("user", JSON.stringify(data.user));
             localStorage.setItem("token", data.token)
             instance.defaults.headers.common["token"] = data.token;

             navigate("/");
            
        } catch (err) {
            console.error("Error connecting to backend:", err);
        }
    }




    return <div>
        <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={()=>{
            console.log("Login Failed");
            
        }}
        auto_select={true}
        />
    </div>
}