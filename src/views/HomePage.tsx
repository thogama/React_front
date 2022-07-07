import Header from "../layouts/Header"
import logo from "../assets2/logo-limpa.png"
import { selectCards } from "../services/api"
import { useState, useContext } from "react"
import { AuthContext } from "../contexts/auth"
import Card from "../components/Card"



export default function HomePage() {


   


    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    return (
        <>
            <div >
                <img style={{ marginTop: "10rem", width: "100%", opacity: "20%", position: "fixed" }} src={logo} />
            </div>

            <Header />
            
            <div  style={{ }} id="cards_wrapper">
                 <Card style={{marginBottom:"10px"}} nome="teste1"/>
                 <Card style={{marginBottom:"10px"}} nome="teste2"/>
                 <Card style={{marginBottom:"10px"}} nome="teste3"/>
            </div>
            <button style={{padding:"10px"}} onClick={handleLogout}>
                Deslogar
            </button>


        </>

    )
}