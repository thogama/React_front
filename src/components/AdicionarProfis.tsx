import { AiOutlinePlusSquare } from "react-icons/ai"
import { BsPencil } from "react-icons/bs"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import { TextField } from "./TextField"
import { useEffect, useState } from "react"
import dummy from "../assets/images/dummy.png"
import { createProfissional } from "../services/api"
export default function AdicionarProfis(props: any) {


    const [file, setFile] = useState(null)
    const [profisData, setprofisData] = useState({values:null,file:null})


    useEffect(() => {
        console.log("mudando props array",profisData)
        if(profisData.values){props.array.push(profisData)}
    }, [profisData])
    const mySchema = Yup.object({
        nome: Yup.string()
            .required("É necessário ter um nome"),
        senha: Yup.string()
            .required("É necessário digitar uma senha!")
            .min(6, "Senha muito curta!"),
        cnpj: Yup.string()
            .required("E necessário ter um CNPJ")
            .min(14, "CNPJ inválido"),
        email: Yup.string()
            .required("É necessário ter um email")
            .email("Email inválido"),
        senha2: Yup.string()
            .test('passwords-match', 'A senha deve ser repetida', function (value) {
                return this.parent.senha === value
            })
    })




    return (
        <div className=" container ">


            <div className="modal fade" id={`exampleModal${props.index}`} tabIndex={-1} aria-labelledby={`exampleModal${props.index}Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`exampleModal${props.index}Label`}>Preencha com os dados do profissional</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <Formik
                                initialValues={{}}
                                onSubmit={() => { }}
                                validationSchema={mySchema}>



                                {({ values, isValid }) => (
                                    <Form onSubmit={(e) => {
                                        e.preventDefault()

                                    }}>


                                        <TextField icon={<AiOutlinePlusSquare size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"Nome"} type="text" name="nome" />

                                        <TextField icon={<AiOutlinePlusSquare size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"CRM/CRO"} type="text" name="crmCro" />


                                        <TextField icon={<AiOutlinePlusSquare size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"Email"} type="text" name="email" />

                                        <TextField icon={<AiOutlinePlusSquare size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"Senha"} type="password" name="senha" />

                                        <TextField icon={<AiOutlinePlusSquare size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"Confirmar senha"} type="password" name="senha2" />

                                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column-reverse" }}>
                                            <input id="form-file" className="form-control" onChange={(event) => {
                                                const file = event.target.files[0]
                                                setFile(file)


                                            }} type="file" name="logomarca" />
                                            {file ?
                                                <div className="form-control ">
                                                    <img style={{ maxWidth: "5rem" }} className="img-fluid" src={URL.createObjectURL(file)} alt="Imagem" />
                                                </div>
                                                :
                                                ""}
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>

                                            <button onBlur={() => setprofisData({ values, file })} type="button" className="btn btn-primary" data-bs-dismiss="modal">Salvar profissional</button>
                                        </div>

                                    </Form>

                                )}
                            </Formik>

                        </div>

                    </div>
                </div>
            </div>






            <div className="row justify-content-center align-items-center ">


                <div className="col-lg-2 col-md-4 col-sm-4">
                    {file ?
                        <img className="img-fluid" src={URL.createObjectURL(file)} alt="Imagem" />
                        :
                        <img className="img-fluid" src={dummy} />}
                </div>

                <div className="col-sm-7 p-0" >
                    {profisData.values ? <p style={{ color: "#53595e" }} className="fs-5  ">{profisData.values.nome}</p> :
                        <p className="fs-4" style={{ color: "#53595e" }}>Nome</p>}
                    {profisData.values ? <p style={{ color: "#53595e" }}>Email: {profisData.values.email}</p> : <p style={{ color: "#53595e" }}>Email exemplo@.com</p>}

                    {profisData.values ? <p style={{ color: "#53595e" }}>CRM/CRO: {profisData.values.crmCro}</p> : <p style={{ color: "#53595e" }}>CRM/CRO: Apenas numeros</p>}

                </div>
                <div data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${props.index}`} className="col-sm-3 m-1 btn p-0 border">
                    Editar
                    <BsPencil
                        type="button" className="p-2" size={35} color="green" />
                </div>





            </div>




        </div>
    )
}