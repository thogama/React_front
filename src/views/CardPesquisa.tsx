import { useState, useEffect, useContext } from "react"
import { selectCards } from "../services/api"
import SearchContext from "../contexts/pesquisa"
export default function CardPesquisa() {

    const {searchValue} = useContext(SearchContext)
    const [data, setData] = useState([])
    useEffect(() => {
        console.log(searchValue)
        selectCards(searchValue).then((response) => {
            setData(response.data)




        })

    }, [])
    const item = document.getElementById("pesquisa_results")
    if (data.length>0) {
        
        item.removeAttribute("hidden")
    }



    return (
        <div hidden id="pesquisa_results" className="card col-12" style={{ boxSizing: "border-box", padding: "24px", zoom: "1" }}>
            <p style={{ fontSize: "1.5rem", color: "#088832", paddingLeft: "10px" }} className="card-title">Resulado da pesquisa</p >
            <div className="card-body">
                teste
            </div>

        </div>
    )
}


