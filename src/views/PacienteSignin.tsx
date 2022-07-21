import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createPaciente } from "../services/api"
import { TextField } from "../components/TextField"
import { Formik, Form } from "formik"
import logo from "../assets2/logo-limpa.png"
import { BsPencil } from "react-icons/bs"


function Sigin() {




    const tenhoconta = useNavigate()


    //States//
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const [plano_saude, setPlano] = useState("")
    const [sexo, setSexo] = useState("")
    const [email, setEmail] = useState("")
    const [rua, setRua] = useState("")
    const [numero, setNumero] = useState("")
    const [bairro, setBairro] = useState("")
    const [cep, setCep] = useState("")
    const [municipio, setMunicipio] = useState("")
    const [estado, setEstado] = useState("")
    const [hipertensao, setHipertensao] = useState("")
    const [diabetes, setDiabetes] = useState("")
    const [fuma, setFuma] = useState("")
    const [alergia, setAlergia] = useState("")
    const [bebida_alcoolica, setBebida] = useState("")
    const [medicamento, setMedicamento] = useState("")
    const [complemento, setComplemento] = useState("")

    //States//


    const disable = () => {
        const campo = document.getElementById("disable_me")
        if (!campo?.hasAttribute("disabled")) {
            campo?.setAttribute("value", "")

            campo?.setAttribute("disabled", "true")
        }
        else {

            campo?.removeAttribute("disabled")

        }
    }

    const handleCriarConta = () => {


        createPaciente(nome, cpf, plano_saude, sexo, email, rua, numero, bairro, cep, municipio,
            estado, Boolean(parseInt(hipertensao)),
            Boolean(parseInt(diabetes)),
            Boolean(parseInt(fuma)),
            Boolean(parseInt(alergia)),
            Boolean(parseInt(bebida_alcoolica)),
            medicamento, senha).then(() => console.log("criei"))
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
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginBottom: "30px" }}>
                        <img style={{ maxWidth: "50%" }} className="img-fluid" src={logo} alt="logo" />

                        <h1 style={{ paddingTop: "100px", color: "#535353", fontWeight: 400, lineHeight: 1.2, fontSize: "20px" }}>Crie sua Cunta</h1>
                    </div>
                    <hr />
                    <Formik
                        initialValues={{}}
                        onSubmit={() => { }}

                    >
                        {({ errors, values }) => (

                            <Form onSubmit={() => { }}  >

                                <div className="p-2" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite seu nome"} type="text" name="nome" label={"Nome"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite seu CPF"} type="text" name="cpf" label={"CPF"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite seu email"} type="text" name="email" label={"Email"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite uma senha"} type="password" name="senha" label={"Senha"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite novamente a senha"} type="password" name="senha2" label={"Confirme a senha"} />


                                </div>
                                <h5
                                    style={{
                                        marginBottom: "30px",
                                        marginTop: "30px", display: "flex",
                                        justifyContent: "center", fontWeight: 400,
                                        fontSize: "20px",
                                        color: "rgb(119, 119, 119)"
                                    }}>Endereço</h5>
                                <hr />
                                <div className="p-2">
                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Nome da rua"} type="text" name="rua" label={"Rua"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Número"} type="text" name="numero" label={"Numero"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Nome do bairro"} type="text" name="bairro" label={"Bairro"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Nome do estado"} type="text" name="estado" label={"Estado"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Complemento"} type="text" name="complemento" label={"Complemento"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite seu CEP"} type="text" name="CEP" label={"CEP"} />

                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} placeHolder={"Digite seu município"} type="text" name="município" label={"Município"} />

                                    <div style={{ paddingBottom: "1rem" }} className="d-flex justify-content-center  form-switch">

                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => disable()} />
                                        <span className="lever"></span>

                                    </div>
                                    <TextField icon={<BsPencil size={"1rem"} color={"transparent"} style={{ left: "5px", zIndex: 2, position: "relative" }} />} id="disable_me" disabled label={"Plano"} placeHolder={"Numero do plano"} type="text" name="planosaude" ></TextField>

                                </div>








                            </Form>
                        )}

                    </Formik>


                    <h5 style={{
                        marginBottom: "30px", marginTop: "30px",
                        display: "flex", justifyContent: "center",
                        fontWeight: 400, fontSize: "20px",
                        color: "rgb(119, 119, 119)"
                    }}>Sobre você</h5>
                    <hr/>
                    <div className="row p-3" id=" mne" >

                        <div>
                            <select className="form-select " value={sexo} onChange={e => setSexo(e.target.value)} >
                                <option value="" disabled selected>Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>

                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <select className="form-select " value={medicamento} onChange={e => setMedicamento(e.target.value)}>
                                <option value="" disabled selected>Medicamento em Uso</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>
                        </div>

                        <div style={{ marginTop: "15px" }}>
                            <select className="form-select " value={alergia} onChange={e => setAlergia(e.target.value)}>
                                <option value="" disabled selected>Alergia</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>

                        </div>

                        <div className="col-5" style={{ marginTop: "15px" }}>
                            <select className="form-select " value={fuma} onChange={e => setFuma(e.target.value)}>
                                <option value="" disabled selected>Fuma</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>
                        </div>
                        <div className="col-7" style={{ marginTop: "15px" }}>
                            <select className="form-select " value={hipertensao} onChange={e => setHipertensao(e.target.value)}>
                                <option value="" disabled selected>Hipertensão</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <select className="form-select " value={diabetes} onChange={e => setDiabetes(e.target.value)}>
                                <option value="" disabled selected>Diabetes</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>
                        </div>
                        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                            <select className="form-select " value={bebida_alcoolica} onChange={e => setBebida(e.target.value)}>
                                <option value="" disabled selected>Bebida Alcoolica</option>
                                <option value="1">Sim</option>
                                <option value="0">Não</option>
                            </select>

                        </div>


                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={() => handleCriarConta()} style={{
                            maxWidth: "fit-content",
                            cursor: "pointer",
                            backgroundColor:"#214ecc"
                        }} className="btn text-light hover-overlay" >
                            Cadastrar
                        </button >
                    </div>




                    <a style={{cursor:"pointer", display: "flex", justifyContent: "center", marginTop: "15px", textDecoration: "none" }} onClick={() => tenhoconta("../login")} className="">
                        Já possui conta?

                    </a>


                </div>
            </div>




        </>
    )
}


export default Sigin




