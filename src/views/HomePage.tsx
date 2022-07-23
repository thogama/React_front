import Header from "../layouts/Header"
import { selectCards } from "../services/api"
import { useState, useContext } from "react"
import { AuthContext } from "../contexts/auth"
import Sidebar from "../layouts/Sidebar"
import FullLayout from "../layouts/FullLayout"



export default function HomePage() {
 




    const { logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    return (
        <>
            

             <FullLayout/>
             



        </>

    )
}