import React from "react"
import Logo from "../assets2/logo-com-nome-slogan.png"
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"
import { TextField } from "../components/TextField"



function Login() {

    //Singn vem de auth
    function handleSubmit() {
        console.log("login")
    }

    const initialValues = {
        email: "",
        password: "",
        remember: false
    }

    const mySchema = Yup.object({
        email: Yup.string()
            .email("Email Inválido")
            .required("É necessário digitar um email!"),
        senha: Yup.string()
            .required("É necessário digitar uma senha!")
            .min(6, "Senha muito curta!")
            .max(10, "Senha muito longa!"),

    })





    return (
        <>
            <div style={{ padding: "30px" }} className="login page wrapper">
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} className="siginWrapper">
                    <img style={{ width: "100%" }} alt="logo" src={Logo} />
                    <h4 style={{ fontSize: "28px", marginTop: "60px" }}>Bem vindo(a) </h4>
                    <p style={{ marginBottom: "60px", fontWeight: 700, fontSize: "16px", color: "rgb(119, 119, 119)" }}>Entre em sua conta para começar</p>
                </div>
                <Formik
                    validationSchema={mySchema}
                    onSubmit={handleSubmit}
                    initialValues={initialValues}>
                    <Form>
                        <TextField type="text" name="email" label={"Email"} />
                        <TextField type="password" name="password" label={"Senha"} />
                        <div style={{ display: "flex",justifyContent:"space-between" }}>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label style={{fontWeight:600,cursor:"pointer"}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Lembrar senha</label>
                            </div>
                            <a href="#" style={{ textDecoration: "none", color: "rgb(0, 132, 137)", marginLeft: "10px", fontWeight: 700, fontSize: "16px" }}>Esqueceu a senha?</a>

                        </div>




                    </Form>


                </Formik>

            </div>
        </>
    )
}

export default Login