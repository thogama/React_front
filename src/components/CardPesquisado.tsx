export default function CardPesquisado(props: any) {
    console.log(props)
    return (
        <>
            <div className="col-md-3 col-sm-12 card">
                <div className="p-2">
                    <p style={{ fontSize: "1.5rem", color: "#088832",textAlign:"center" }}
                     className="card-title">{props.source.nome}</p >
                    <div className="align-middle  card-body">
                        <img style={{
                            display: "block",
                            border:"1px solid gray",
                            objectFit: "cover", width: "4rem",
                             padding: "1px"
                        }} src={props.source.logomarca} />
                    </div>
                </div>


            </div>

        </>
    )
}