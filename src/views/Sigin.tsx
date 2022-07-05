import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets2/logo-com-nome-slogan.png"
import { createPaciente } from "../services/api"
import { TextField } from "../components/TextField"
import { Formik, Form } from "formik"
import logo2 from "../assets2/logo-limpa.png"


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



            <div style={{  display: "flex", flexDirection: "column", border: "solid #d4d4d4 5px", borderRadius: "5px", padding: "1rem" }} className="form-control">
                <img src={logo} alt="logo" />

                <h3 style={{ marginBottom: "30px", marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "25px" }}></h3>

                <h5 style={{ marginBottom: "30px", marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "20px", color: "rgb(119, 119, 119)" }}>Dados do Paciente</h5>
                <Formik
                    initialValues={{}}
                    onSubmit={() => { }}

                >
                    {({ errors, values }) => (

                        <Form onSubmit={() =>console.log(values)}  >

                            <div style={{ border: "1px solid gray" }} className="form-control">
                                <TextField style={{ maxWidth: "10px" }} placeHolder={"Digite seu nome"} type="text" name="nome" label={"Nome"} />

                                <TextField placeHolder={"Digite seu CPF"} type="text" name="cpf" label={"CPF"} />

                                <TextField placeHolder={"Digite seu email"} type="text" name="email" label={"Email"} />

                                <TextField placeHolder={"Digite uma senha"} type="password" name="senha" label={"Senha"} />

                                <TextField placeHolder={"Digite novamente a senha"} type="password" name="senha2" label={"Confirme a senha"} />


                            </div>
                            <h5 style={{ marginBottom: "30px", marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "20px", color: "rgb(119, 119, 119)" }}>Endereço</h5>

                            <div style={{ marginTop: "30px", border: "1px solid gray" }} className="form-control">
                                <TextField placeHolder={"Nome da rua"} type="text" name="rua" label={"Rua"} />

                                <TextField placeHolder={"Número"} type="text" name="numero" label={"Numero"} />

                                <TextField placeHolder={"Nome do bairro"} type="text" name="bairro" label={"Bairro"} />

                                <TextField placeHolder={"Nome do estado"} type="text" name="estado" label={"Estado"} />

                                <TextField placeHolder={"Complemento"} type="text" name="complemento" label={"Complemento"} />

                                <TextField placeHolder={"Digite seu CEP"} type="text" name="CEP" label={"CEP"} />

                                <TextField placeHolder={"Digite seu município"} type="text" name="município" label={"Município"} />

                                <div style={{ display: "flex", justifyContent: "center" }} className=" form-switch">

                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => disable()} />
                                    <span className="lever"></span>

                                </div>
                                <TextField id="disable_me" disabled label={"Plano"} placeHolder={"Numero do plano"} type="text" name="planosaude" ></TextField>

                            </div>








                        </Form>
                    )}

                </Formik>


                <h5 style={{ marginBottom: "30px", marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "20px", color: "rgb(119, 119, 119)" }}>Sobre você</h5>

                <div style={{ border: "1px solid gray" }} id="mne" className="form-control">

                    <div style={{ marginTop: "15px" }}>
                        <select className="form-select form-select-lg" value={sexo} onChange={e => setSexo(e.target.value)} >
                            <option value="" disabled selected>Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>

                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <select className="form-select form-select-lg" value={medicamento} onChange={e => setMedicamento(e.target.value)}>
                            <option value="" disabled selected>Medicamento em Uso</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>

                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <select className="form-select form-select-lg" value={alergia} onChange={e => setAlergia(e.target.value)}>
                            <option value="" disabled selected>Alergia</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>

                    </div>

                    <div style={{ marginTop: "15px" }}>
                        <select className="form-select form-select-lg" value={fuma} onChange={e => setFuma(e.target.value)}>
                            <option value="" disabled selected>Fuma</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <select className="form-select form-select-lg" value={hipertensao} onChange={e => setHipertensao(e.target.value)}>
                            <option value="" disabled selected>Hipertensão</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <select className="form-select form-select-lg" value={diabetes} onChange={e => setDiabetes(e.target.value)}>
                            <option value="" disabled selected>Diabetes</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "15px", marginBottom: "15px" }}>
                        <select className="form-select form-select-lg" value={bebida_alcoolica} onChange={e => setBebida(e.target.value)}>
                            <option value="" disabled selected>Bebida Alcoolica</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>

                    </div>
                    
                </div>

                <button type="button" onClick={() => handleCriarConta()} style={{
                                border: "none",
                                marginTop:"40px",
                                width: "100%", backgroundColor: "rgb(0, 137, 42)",
                                alignItems: "center", fontWeight: 700,
                                display: "flex", height: "57px",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                borderRadius: "5px"}} className="text-light hover-overlay" >
                    CADASTRAR
                </button >

                


                <a style={{display:"flex",justifyContent:"center",marginTop:"15px", textDecoration: "none" }} onClick={() => tenhoconta("../login")} className="">
                    Já possui conta?

                </a>

                
            </div>




        </>
    )
}


export default Sigin





