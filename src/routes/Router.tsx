import React,{ useContext} from "react"
import LoginView from "../views/Login"
import HomePage from "../views/HomePage"

import { BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import {AuthProvider,AuthContext} from "../contexts/auth"
import Sigin from "../views/Sigin"



export default function AppRoutes(){
    const Private:React.FunctionComponent<any>= ({children})=>{
        const { authenticated,load} = useContext(AuthContext)
    
        
        if(load){
            return <div className="load">Loading...</div>
        }
        
        if(!authenticated){
            return <Navigate to="/login"/>
        }
        
        return children
    }

 
    return(

    <BrowserRouter>
          <AuthProvider>
        
            <Routes>
                <Route element = {<Navigate to="/login"/>} path = "/" />
                <Route element = {<LoginView/>} path = '/login'/>
                <Route element = {<Private><HomePage/></Private>} path = '/home'/>
                <Route element = {<Sigin/>} path = '/signin'/>
            </Routes>
          </AuthProvider>
        
    </BrowserRouter>
    )
}



