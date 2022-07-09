export default function Card(props: any) {
    return (
        <>
            <div className="onloadCard">
                <div style={{
                    borderRadius: "5px",
                    border: "2px inset #2962ff",
                    display: "flex", alignItems: "center", padding: "10px", marginBottom: "15px",
                }}>

                    <img style={{
                        maxWidth: "60px", clipPath: "circle(30px at center)",
                        border: "5px #2962ff inset", borderRadius: "85%",
                        padding: "1px"
                    }} src={props.image} />
                    <div style={{ margin: "10px" }}>
                        <h4 style={{ fontWeight: 650 }}>{props.name}</h4>

                        <p style={{ fontSize: "15px", color: "#757e85" }}>{props.cnpj}</p>
                    </div>
                    <div style={{color: "#fff",backgroundColor: "rgb(3 172 71)",borderColor: "#2962ff"}}
                     className="btn btn-primary">
                    Agendar
                </div>


            </div>
        </div>
        </>
    )
}