import React, { useContext, useState } from "react"
import Logo from "../assets/images/logo-limpa.png"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TextField } from "../components/TextField.js"
import { AuthContext } from "../contexts/auth"
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"



function Login() {


    const { login, authenticated } = useContext(AuthContext)



    const initialValues = {
        email: "",
        password: "",
        remember: false
    }

    const mySchema = Yup.object({
        email: Yup.string()
            .email("Email Inválido")
            .required("É necessário digitar um email!"),

        password: Yup.string()
            .required("É necessário digitar uma senha!")
            .min(6, "Senha muito curta!")
            .max(10, "Senha muito longa!"),

    })

    function handleLogin(e: any, email: string, password: string, lembrar: boolean) {
        e.preventDefault()

        console.log(email, password, lembrar)
        login(email, password)

    }







    return (
        <>

            <div id="login-container" style={{
                position: "relative", height: "100%",
                flex: "1 1", display: "flex", flexDirection: "row",
                flexWrap: "wrap", alignItems: "center", justifyContent: "center",
                margin: " 0 auto"
            }}>
                <div id="login-content" style={{
                    maxWidth: "420px", width: "94%"
                    , margin: "0 auto", backgroundColor: "#ffffff",
                    padding: "35px 35px  10px",
                    borderRadius: "8px",
                    boxShadow: "0 0 2px rgb(0 0 0 / 35%)",
                    fontSize: "14px"
                }}>




                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom: "30px" }} className="siginWrapper">
                        <img style={{ maxWidth: "50%", paddingTop: "30px" }} alt="logo" src={Logo} />
                        <h1 style={{ paddingTop: "100px", color: "#535353", fontWeight: 400, lineHeight: 1.2, fontSize: "20px" }}>Entrar</h1>
                    </div>

                    <Formik

                        initialValues={initialValues}
                        onSubmit={() => { }}
                        validationSchema={mySchema}

                    >
                        {({ errors, values, isValid }) => (

                            <Form style={{ display: "flex", flexDirection: "column" }} onSubmit={(e) => {
                                console.log(errors)
                                handleLogin(e, values.email, values.password, values.remember)

                            }}  >

                                <div >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                        <TextField icon={<AiOutlineUser size={"1rem"} style={{ left: "5px", zIndex: 2, position: "relative" }} className="form-text" />} placeHolder={"Digite seu email"} type="text" id="email" name="email" label={""} />

                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                                        <TextField icon={<AiOutlineLock size={"1rem"} style={{ left: "5px", zIndex: 2, position: "relative" }} className="form-text" />} placeHolder={"Digite sua senha"} type="password" id="passoword" name="password" label={""} />

                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                                    <div className="form-check ">
                                        <input onChange={() => values.remember = !values.remember} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                                        <label style={{ cursor: "pointer" }} className="form-check-label" htmlFor="flexSwitchCheckDefault">Lembrar senha</label>
                                    </div>
                                    <a href="/" style={{ textDecoration: "none", color: "#004afa", marginLeft: "10px", fontSize: "15px" }}>Esqueceu a senha?</a>

                                </div>

                                <button disabled={!isValid} className="text-light  hover-overlay" style={{
                                    margin: "0 auto",
                                    cursor: "pointer",
                                    height: "auto",
                                    border: "none",
                                    backgroundColor: "#004afa",
                                    borderRadius: "5%",
                                    padding: "9px 20px",
                                    marginTop: "13px"
                                }} type="submit">
                                    Entrar
                                </button>





                            </Form>
                        )}


                    </Formik>

                    <div className="d-flex justify-content-evenly">
                        <a style={{ textDecoration: "none", display: "flex", justifyContent: "center", marginTop: "10px" }}
                            href="/paciente/signin">Criar Conta : Paciente</a>
                        <a style={{ color:"green", textDecoration: "none", display: "flex", justifyContent: "center", marginTop: "10px" }}
                            href="/estabelecimento/signin">Criar Conta : Empresa</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login


