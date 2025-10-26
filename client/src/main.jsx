import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { StyledEngineProvider } from '@mui/material/styles'
import { GoogleOAuthProvider } from '@react-oauth/google'



const clientId = import.meta.env.VITE_CLIENT_ID



createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <StyledEngineProvider injectFirst>
        <GoogleOAuthProvider clientId={clientId} >
        <App />
        </GoogleOAuthProvider>
    </StyledEngineProvider>
        
    </BrowserRouter>
    

)
