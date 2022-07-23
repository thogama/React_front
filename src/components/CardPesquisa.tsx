import { useState, useEffect, useContext, useRef } from "react"
import { selectCards } from "../services/api"
import SearchContext from "../contexts/pesquisa"
import { element } from "prop-types"
import CardPesquisado from "./CardPesquisado"
export default function CardPesquisa() {
    const { searchValue } = useContext(SearchContext)
    const [data, setData] = useState([])
    useEffect(() => {
        selectCards(searchValue).then((response) => {
            setData(response.data)
            console.log("valor:", searchValue)
        }).catch(() => {
            setData([])
        })

    }, [searchValue])

    const item = document.getElementById("search_results")
    const item2 = document.getElementById("search_no_results")








    if (searchValue.length > 0 && data.length > 0) {

        item.removeAttribute("hidden")

    }

    if (data.length == 0 && searchValue.length > 0) {
        item2.removeAttribute("hidden")
    }


    return (
        <>
            <div hidden id="search_results" className="single_card card col-12" style={{ boxSizing: "border-box", padding: "24px", zoom: "1" }}>
                <p style={{ fontSize: "1.5rem", color: "rgb(41, 98, 255)", paddingLeft: "10px" }} className="card-title">Resultado da pesquisa: <span style={{ color: "green" }}>{searchValue}</span></p >
                <div className=" row card-body">


                    {/* {data.map((element) => {

                        return <CardPesquisado source={element} />
                    })} */}
                    <div className="col-sm-2" >
                        <p className="text-center fs-5  ">Mais procurados</p>
                        <hr />

                        <div className="m-1 badge bg-primary">Dentista</div>
                        <div className="m-1 badge bg-primary">Clínico Geral</div>
                        <div className="m-1 badge bg-primary">Cardiologista</div>
                        <div className="m-1 badge bg-primary">Ginecologista</div>
                        <div className="m-1 badge bg-primary">Nutricionista</div>
                        <div className="m-1 badge bg-primary">Otorrino</div>
                        <hr />
                    </div>
                    <div style={{ maxHeight: "400px" }} className="list-group  overflow-auto col-sm-10">

                        {data.map((element) => {

                            return <li className="list-group-item border-0"> <CardPesquisado source={element} /></li>
                        })}
                    </div>



                </div>

            </div>
            <div hidden id="search_no_results" className="onloadCard card col-12" style={{ boxSizing: "border-box", padding: "24px", zoom: "1" }}>
                <p style={{ fontSize: "1.5rem", color: "rgb(41, 98, 255)", paddingLeft: "10px" }} className="card-title">Resultado da pesquisa: <span style={{ color: "green" }}>{searchValue}</span></p >
                <div className="row card-body">
                    <p style={{ fontSize: "larger" }} className="card-text text-center">Não encontramos o que você estava procuramos, logo em breve poderemos achar!</p>
                </div>

            </div>
        </>
    )
}


