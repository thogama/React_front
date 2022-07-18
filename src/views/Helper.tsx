import { useContext, useEffect } from "react"
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai"
import { AuthContext } from "../contexts/auth"
import { getStats } from "../services/api"

const focusSearch= ()=>{
    const item =document.getElementById("search_box")
    item.focus()
}

export default function CardHelper() {

    return (
        <>

            <div className="card " style={{ boxSizing: "border-box", padding: "24px", zoom: "1" }}>
                <p style={{ fontSize: "1.5rem", color: "#2962ff", paddingLeft: "10px" }} className="card-title">Como usar nossa plataforma?</p >
                <div onClick={focusSearch} className="card-body" >
                    
                    <div  style={{ display: "flex", alignItems: "center", }}>
                        <AiOutlineSearch  color="#2962ff" size={"2rem"} />
                        <p className="card-text">Busque por um medico ou especialidade ou estabelecimento no campo de pesquisa</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center",}}>
                        <AiOutlineCalendar color="#2962ff" size={"2rem"} />
                        <p className="card-text">Marque um atendimento através do telefone ou nos endereços</p>
                    </div>


                </div>
            </div>

        </>
    )
}