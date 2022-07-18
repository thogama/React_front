import { useEffect, useState } from "react"
import { getStats } from "../services/api"
import { FaHospital } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { RiStethoscopeFill } from "react-icons/ri"
import { SiBookstack } from "react-icons/si"
export default function Stats() {


    const [estabelecimentos, setEstabelecimentos] = useState()
    const [pacientes, setPacientes] = useState()
    const [profissionais, setProfissionais] = useState()
    const [especialidades, setEspecialides] = useState()
    useEffect(() => {
        getStats().then((response) => {
            console.log(response.data)
            setEstabelecimentos(response.data.estabelecimentos)
            setPacientes(response.data.pacientes)
            setProfissionais(response.data.profissionais)
            setEspecialides(response.data.especialidades)

        })
    }, [])




    return (
        <>
            
                <div id="single_card" className="  card col-5" style={{ boxSizing: "border-box", padding: "24px", zoom: "1" }}>
                    <p style={{ fontSize: "1.5rem", color: "#2962ff",paddingLeft:"10px" }} className="card-title">Conheça a Orcilink</p >

                    <div className="row card-body" >
                        <div className="col-6">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h1 className="card-text">{estabelecimentos}</h1>

                                <FaHospital color="#214ecc" size={35} />


                            </div>
                            <p style={{ textAlign: "center" }}><div className="text-nowrap" style={{ color: "#214ecc" }}>Estabelecimentos</div> </p>

                        </div>
                        <div className="col-6">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h1 className="card-text">{pacientes}</h1>

                                <BsFillPersonFill color="#214ecc" size={35} />


                            </div>
                            <p style={{ textAlign: "center" }}><div style={{ color: "#214ecc" }}>Pacientes</div></p>

                        </div>
                        <div className="col-6">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h1 className="card-text">{profissionais}</h1>

                                <RiStethoscopeFill color="#214ecc" size={35} />


                            </div>
                            <p style={{ textAlign: "center" }}><div style={{ color: "#214ecc" }}>Profissionais</div></p>

                        </div>
                        <div className="col-6">
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h1 className="card-text">{especialidades}</h1>

                                <RiStethoscopeFill color="#214ecc" size={35} />


                            </div>
                            <p style={{ textAlign: "center" }}><div style={{ color: "#214ecc" }}>Especialidades</div></p>

                        </div>







                    </div>
                </div>
            
        </>
    )
}