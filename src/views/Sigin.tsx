import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets2/logo-com-nome-slogan.png"
import { createPaciente } from "../services/api"
import { TextField } from "../components/TextField"
import { Formik, Form } from "formik"


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



            <div style={{ display: "flex", flexDirection: "column", border: "solid #d4d4d4 5px", borderRadius: "5px", padding: "1rem" }} className="form-control">
                <img src={logo} alt="logo" />

                <h3 style={{ marginBottom:"30px",marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "25px"}}></h3>

                <h5 style={{ marginBottom:"30px",marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "20px", color: "rgb(119, 119, 119)" }}>Dados do Paciente</h5>
                <Formik
                    initialValues={{}}
                    onSubmit={() => { }}
                    
                >
                    {({ errors, values }) => (

                        <Form onSubmit={()=>{}}  >

                            <div style={{ border: "1px solid gray" }} className="form-control">
                                <TextField style={{maxWidth:"10px"}} placeHolder={"Digite seu nome"} type="text" name="nome" label={"Nome"} />

                                <TextField placeHolder={"Digite seu CPF"} type="text" name="cpf" label={"CPF"} />

                                <TextField placeHolder={"Digite seu email"} type="text" name="email" label={"Email"}/>

                                <TextField placeHolder={"Digite uma senha"} type="password" name="senha" label={"Senha"}/>

                                <TextField placeHolder={"Digite novamente a senha"} type="password" name="senha2" label={"Confirme a senha"}/>

                                
                            </div>
                            <h5 style={{ marginBottom:"30px",marginTop: "30px", display: "flex", justifyContent: "center", fontWeight: 600, fontSize: "20px", color: "rgb(119, 119, 119)" }}>Endereço</h5>

                            <div style={{marginTop:"30px", border: "1px solid gray" }} className="form-control">
                                <TextField placeHolder={"Nome da rua"} type="text" name="rua" label={"Rua"} />

                                <TextField placeHolder={"Número"} type="text" name="numero" label={"Numero"} />

                                <TextField placeHolder={"Nome do bairro"} type="text" name="bairro" label={"Bairro"}/>

                                <TextField placeHolder={"Nome do estado"} type="text" name="estado" label={"Estado"}/>

                                <TextField placeHolder={"Complemento"} type="text" name="complemento" label={"Complemento"}/>

                                <TextField placeHolder={"Digite seu CEP"} type="text" name="CEP" label={"CEP"}/>

                                <TextField placeHolder={"Digite seu município"} type="text" name="município" label={"Município"}/>
                                
                                
                            </div>
                            

                            





                        </Form>
                    )}

                </Formik>

                
                <div style={{ border: "solid #d4d4d4 1px", borderRadius: "5px", padding: "1rem", margin: "1rem auto" }} className=" container hoverable card indigo lighten-5 row">
                    <span> Plano de Saúde</span>

                    <div className="switch">
                        <label>

                            <input onClick={() => disable()} type="checkbox" />
                            <span className="lever"></span>

                        </label>
                    </div>


                    <div className="input-field col s12 l12  "  >
                        <input disabled value={plano_saude} onChange={e => setPlano(e.target.value)} placeholder="Nome do plano" id="disable_me" type="text" className="validate center" />



                    </div>
                    <br />
                </div>
                <div style={{ border: "solid #d4d4d4 1px", borderRadius: "5px", padding: "1rem", margin: "1rem auto" }} id="mne" className="hoverable container row card indigo lighten-5 row">

                    <div className="col s6 l2 input-field " >
                        <select value={sexo} onChange={e => setSexo(e.target.value)} >
                            <option value="" disabled selected>Sexo</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select>

                    </div>
                    <div className="col s12 l10 input-field">
                        <select value={medicamento} onChange={e => setMedicamento(e.target.value)}>
                            <option value="" disabled selected>Medicamento em Uso</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>

                    </div>
                    <div className="col s6 l12 input-field">
                        <select value={alergia} onChange={e => setAlergia(e.target.value)}>
                            <option value="" disabled selected>Alergia</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>

                    </div>

                    <div className="col s6 l2 input-field">
                        <select value={fuma} onChange={e => setFuma(e.target.value)}>
                            <option value="" disabled selected>Fuma</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div className="col s12 l3 input-field">
                        <select value={hipertensao} onChange={e => setHipertensao(e.target.value)}>
                            <option value="" disabled selected>Hipertensão</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div className="col s6 l3 input-field">
                        <select value={diabetes} onChange={e => setDiabetes(e.target.value)}>
                            <option value="" disabled selected>Diabetes</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>
                    </div>
                    <div className="col s12 l4 input-field">
                        <select value={bebida_alcoolica} onChange={e => setBebida(e.target.value)}>
                            <option value="" disabled selected>Bebida Alcoolica</option>
                            <option value="1">Sim</option>
                            <option value="0">Não</option>
                        </select>

                    </div>






                </div>


                <div className="row container ">
                    <div onClick={() => handleCriarConta()} style={{ marginTop: "1rem" }} className="  white-text col s12 l8 offset-l2 row waves-effect waves-light btn-small indigo" >
                        CADASTRAR
                    </div>
                </div>



                <a onClick={() => tenhoconta("../login/paciente")} className="col s8 l4 offset-l4 offset-s2 center waves-effect waves-light  ">
                    Já possui conta?

                </a>
            </div>

            <br />


        </>
    )
}


export default Sigin





