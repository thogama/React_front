export default function Card(props: any) {
    return (
        <>
            <div style={{border:"1px solid green"}}>
                
                <h1>{props.name}</h1>
                <img style={{ maxWidth: "10%" }} src={props.image} />
            </div>
        </>
    )
}