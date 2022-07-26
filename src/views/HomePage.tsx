import Header from "../layouts/Header"
import { selectCards } from "../services/api"
import { useState, useContext } from "react"
import { AuthContext } from "../contexts/auth"
import Sidebar from "../layouts/Sidebar"
import FullLayout from "../layouts/FullLayout"
import CardsPesquisa from "../components/CardPesquisa";
import CardHelper from "../components/Helper";
import Stats from "../components/Stats";


export default function HomePage() {
 




    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    return (
        <>
            

             
             <CardsPesquisa/>
            <CardHelper/>
            <Stats/>
             



        </>

    )
}