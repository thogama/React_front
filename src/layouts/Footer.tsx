import { useEffect } from "react"
import { BsSearch } from "react-icons/bs"
import { useLocation } from "react-router-dom"

export default function Footer() {
    const location = useLocation()


    useEffect(() => {
        if (location.pathname == "/home") {
            const page = document.getElementById("home")
            const button = document.getElementById("homebutton")
            const icon = document.getElementById("homeicon")
            page.style.paddingTop = "5px"
            page.style.borderTop = "5px solid rgb(3 172 71)"
            button.style.fontWeight = "600"
            button.style.color = "green"
            button.style.borderTop = "none"
            icon.style.color ="green"
        }
    })


    return (
        <>
            <div className="fixed-bottom">

                <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "10px", backgroundColor: "white  " }} >

                    <div id="home" style={{ paddingTop: "5px", display: "flex",flexDirection:"column",alignItems:"center" }}>
                        <BsSearch id="homeicon" width={"20px"} />
                        <button id="homebutton" style={{ fontSize: "21px", padding: "5px", color: "black", borderTop: "5px solid rgb(41, 98, 255)" }} className="btn ">
                            Busca

                        </button>
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                        <button style={{ fontSize: "21px", padding: "5px", color: "black", borderTop: "5px solid rgb(41, 98, 255)" }} className="btn ">Pagina 2</button>
                    </div>
                    <div style={{ paddingTop: "5px" }}>
                        <button style={{ fontSize: "21px", padding: "5px", color: "black", borderTop: "5px solid rgb(41, 98, 255)" }} className="btn ">Pagina 3</button>
                    </div>


                </div>
            </div>
        </>
    )
}