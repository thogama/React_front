import React, { useContext, useState } from "react"
import Logo from "../assets2/logo-com-nome-slogan.png"
import { Formik, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { TextField } from "../components/TextField.js"
import { AuthContext } from "../contexts/auth"


function Login() {

    
    const {login,authenticated} = useContext(AuthContext)

    const [submitemail, setEmail] = useState("")
    const [submitpassword, setPassowrd] = useState("")
    const [lembrar, setLembrar] = useState(false)

    const initialValues = {
        email: submitemail,
        password: submitpassword,
        remember: lembrar 
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
        setEmail(email)
        setLembrar(lembrar)
        setPassowrd(password)
        //bug
        console.log("login",submitemail,submitpassword)
        login(submitemail,submitpassword)




    }







    return (
        <>

            <div style={{ padding: "30px" }} className="login page wrapper">
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} className="siginWrapper">
                    <img style={{ width: "100%" }} alt="logo" src={Logo} />
                    <h4 style={{ fontSize: "28px", marginTop: "60px" }}>Bem vindo(a) </h4>
                    <p style={{ marginBottom: "60px", fontWeight: 700, fontSize: "16px", color: "rgb(119, 119, 119)" }}>Entre em sua conta para começar</p>
                </div>
               
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}
                    validationSchema={mySchema}
                >
                    {({ errors, values }) => (

                        <Form onSubmit={(e) => {
                            values.remember = lembrar
                            handleLogin(e,values.email,values.password,values.remember)
                            
                        }}  >

                            <div style={{border:"1px solid gray"}} className="form-control">
                            <TextField placeHolder={"Digite seu email"} type="text" name="email" label={"Email"} />

                            <TextField placeHolder={"Digite sua senha"} type="password" name="password" label={"Senha"} />
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", marginBottom: "15px" }}>
                                <div className="form-check form-switch">
                                    <input onChange={(e: any) => setLembrar(Boolean(!lembrar))} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label style={{ fontWeight: 600, cursor: "pointer" }} className="form-check-label" htmlFor="flexSwitchCheckDefault">Lembrar senha</label>
                                </div>
                                <a href="/" style={{ textDecoration: "none", color: "#0bb7af", marginLeft: "10px", fontWeight: 700, fontSize: "16px" }}>Esqueceu a senha?</a>

                            </div>

                            <button className="text-light hover-overlay" style={{
                                border: "none",
                                width: "100%", backgroundColor: "#2962ff",
                                alignItems: "center", fontWeight: 700,
                                display: "flex", height: "57px",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                borderRadius: "5px"
                            }} type="submit">
                                Entrar
                            </button>





                        </Form>
                    )}

                </Formik>
                
                <a style={{textDecoration:"none",display:"flex",justifyContent:"center",marginTop:"10px"}} href="/signin">Criar Conta</a>
            </div>
        </>
    )
}

export default Login


