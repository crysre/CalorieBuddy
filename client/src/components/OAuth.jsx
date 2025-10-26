import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
import axios from "axios";


export const OAuth = ()=>{

    function handleLogout(){
        googleLogout()
    }

    const navigate = useNavigate()

    const handleLoginSuccess = async(credentialResponse)=>{
        const token = credentialResponse.credential;

        try{
            const res = await axios.post("http://localhost:3000/oauth", {token} )
            const data = res.data;
             console.log("Login successful:", data);
             localStorage.setItem("user", JSON.stringify(data.user));
             localStorage.setItem("token", JSON.stringify(data.token))
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