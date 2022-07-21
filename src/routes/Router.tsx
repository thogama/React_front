import React,{ useContext} from "react"
import LoginView from "../views/Login"
import HomePage from "../views/HomePage"

import { BrowserRouter,Navigate,Route,Routes} from "react-router-dom"
import {AuthProvider,AuthContext} from "../contexts/auth"
import PacienteSignin from "../views/PacienteSignin"
import EstabelecimentoSignin from "../views/EstabelecimentoSignin"


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
                
                <Route element = {<LoginView/>} path = '/paciente/login'/>
                <Route element = {<LoginView/>} path = "/estabelecimento/login"/>
                <Route element = {<Private><HomePage/></Private>} path = '/home'/>
                <Route element = {<PacienteSignin/>} path = '/paciente/signin'/>
                <Route element = {<EstabelecimentoSignin/>} path = '/estabelecimento/signin'/>

            </Routes>
          </AuthProvider>
        
    </BrowserRouter>
    )
}



