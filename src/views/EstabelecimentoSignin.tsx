import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createEstabelecimento } from "../services/api"
import { TextField } from "../components/TextField"
import { Formik, Form } from "formik"
import logo from "../assets/images/logo-limpa.png"
import { BsPencil } from "react-icons/bs"
import * as Yup from "yup"



function Sigin() {


    const [file, setFile] = useState(null)
   
    //yup schema//
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
    //







    






    return (
        <>



            <div id="login-container" style={{
                position: "relative", height: "100%",
                flex: "1 1", display: "flex", flexDirection: "row",
                flexWrap: "wrap", alignItems: "center", justifyContent: "center",
                margin: " 0 auto"
            }}>
                <div className="border" id="login-content" style={{
                    maxWidth: "65%"
                    , margin: "0 15%", backgroundColor: "#ffffff",
                    padding: "35px 35px  10px",
                    borderRadius: "8px",
                    boxShadow: "0 0 2px rgb(0 0 0 / 35%)",
                    fontSize: "14px"
                }}>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom: "30px" }}>
                        <img className="img-fluid col-sm-3" src={logo} alt="logo" />

                        <h1 style={{ paddingTop: "100px", color: "#535353", fontWeight: 400, lineHeight: 1.2, fontSize: "20px" }}>Crie a conta da sua organização</h1>
                    </div>
                    <hr />
                    <Formik
                        initialValues={{}}
                        onSubmit={() => { }}
                        validationSchema={mySchema}

                    >
                        {({ values, isValid }) => (

                            <Form onSubmit={(e) => {
                                e.preventDefault()
                                //handleCriarConta(values)
                                createEstabelecimento(e,file,values)


                            }}  >

                                <div className="row p-2" style={{}}>
                                    <div className="col-sm-6 ">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite o nome da organização"} type="text" name="nome" label={"Nome"} />
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"CNPJ com apenas números"} type="text" name="cnpj" label={"CNPJ"} />

                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite o email da organização"} type="text" name="email" label={"Email"} />


                                    </div>
                                    <div className="col-sm-6">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite uma senha"} type="password" name="senha" label={"Senha"} />

                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Confirme a senha"} type="password" name="senha2" label={"Confirme a senha"} />

                                        <input id="form-file" className="form-control" onChange={(event) => {
                                            const file = event.target.files[0]
                                            setFile(file)
                                        }} type="file" name="logomarca" />





                                    </div>



                                </div>
                                <h5
                                    style={{
                                        marginBottom: "30px",
                                        marginTop: "30px", display: "flex",
                                        justifyContent: "center", fontWeight: 400,
                                        fontSize: "20px",
                                        color: "rgb(119, 119, 119)"
                                    }}>Localização</h5>
                                <hr />
                                <div className="row p-2">
                                    <div className="col-sm-4">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Nome da rua"} type="text" name="rua" label={"Rua"} />

                                    </div>
                                    <div className="col-sm-4">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Número"} type="text" name="numero" label={"Numero"} />

                                    </div>
                                    <div className="col-sm-4">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Nome do bairro"} type="text" name="bairro" label={"Bairro"} />

                                    </div>
                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Complemento"} type="text" name="complemento" label={"Complemento"} />

                                    <div className="col-sm-4">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite o município"} type="text" name="municipio" label={"Município"} />

                                    </div>
                                    <div className="col-sm-4">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Nome do estado"} type="text" name="estado" label={"Estado"} />

                                    </div>

                                    <div className="col-sm-4">
                                        <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite o  CEP"} type="text" name="CEP" label={"CEP"} />

                                    </div>

                                </div>

                                <h5
                                    style={{
                                        marginBottom: "30px",
                                        marginTop: "30px", display: "flex",
                                        justifyContent: "center", fontWeight: 400,
                                        fontSize: "20px",
                                        color: "rgb(119, 119, 119)"
                                    }}>Contatos</h5>
                                <hr />
                                <div style={{ marginBottom: "10px" }} className="row p-2">
                                    <div className="col-sm-6">
                                        <TextField icon={<BsPencil size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"Telefone"} type="text" name="telefone" />

                                    </div>
                                    <div className="col-sm-6">
                                        <TextField icon={<BsPencil size={"1rem"}
                                            color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }}
                                        />} placeHolder={"Site"} type="text" name="link_site" />

                                    </div>
                                </div>







                                <div className="d-flex justify-content-center">
                                    <button type="submit" style={{
                                        maxWidth: "fit-content",
                                        cursor: "pointer",
                                        backgroundColor: "#214ecc"
                                    }} className="btn text-light hover-overlay" >
                                        Cadastrar
                                    </button >
                                </div>
                            </Form>
                        )}

                    </Formik>












                    <a style={{
                        cursor: "pointer", display: "flex",
                        justifyContent: "center", marginTop: "15px",
                        textDecoration: "none"
                    }} href="/estabelecimento/login" >
                        Já possui conta?

                    </a>


                </div>
            </div>




        </>
    )
}


export default Sigin





