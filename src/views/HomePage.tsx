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
            <Card nome="Editar comp card" />
            <div style={{ backgroundColor: "red", }} id="cards_wrapper">
                
            </div>
            <button onClick={handleLogout}>
                Deslogar
            </button>


        </>

    )
}