import {BiCurrentLocation} from "react-icons/bi"
export default function CardPesquisado(props: any) {

    console.log(props.source)
    return (
        <>
            <div className=" border rounded-start border-primary onloadCard  ">



                <div className="row p-3">
                    <p style={{ color: "#088832" }}
                        className="text-center fs-3">{props.source.nome}</p >
                    <div className="d-flex flex-column align-items-center col-sm-2 ">

                        <img className="img-fluid" style={{
                            display: "block",
                            borderRadius:"100%",
                            objectFit: "cover", width: "5rem",
                            padding: "1px"
                        }} src={props.source.logomarca} />

                    </div>
                    <div className="col-sm-5">
                        <div className="m-1 badge bg-primary">Dentista</div>
                        <div className="m-1 badge bg-primary">Clínico Geral</div>
                        <div className="m-1 badge bg-primary">Cardiologista</div>
                        <div className="m-1 badge bg-primary">Ginecologista</div>
                        <div className="m-1 badge bg-primary">Nutricionista</div>
                        <div className="m-1 badge bg-primary">Otorrino</div>
                    </div>
                    <div className="text-center col-sm-5">

                        
                        <BiCurrentLocation size={20}/>
                            <p>{props.source.rua} Bairro {props.source.bairro}</p>
                        <p>Numero {props.source.numero}, {props.source.municipio}/{props.source.estado}</p>
                        
                        
                    </div>
                </div>



            </div>

        </>
    )
}