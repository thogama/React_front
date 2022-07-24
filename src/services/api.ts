import axios from "axios"
import { string } from "prop-types"
import AppRoutes from "../routes/Router"


export const api = axios.create({
    //baseURL:https://backend-orcilink.herokuapp.com/
    baseURL: "http://localhost:3333"
})

export const createEstabelecimento = (e: any, file: any, values: any) => {
    const data = new FormData()
    data.set("logomarca", file)
    
    
    data.set("email",values.email)
    data.set("senha",values.senha)
    data.set("nome",values.nome)
    data.set("bairro",values.bairro) 
    data.set("cnpj",values.cnpj)
    data.set("rua",values.rua)
    data.set("numero",values.numero)
    data.set("bairro",values.bairro)
    data.set("municipio",values.municipio)
    data.set("estado",values.estado)
    data.set("linkSite",values.link_site)
    data.set("telefone",values.telefone)
    console.log(data)
    //const baseURL = "https://backend-orcilink.herokuapp.com/"
    const baseURL = "http://localhost:3333/estabelecimento/signin"

      axios.post(baseURL,data,).then((response)=>{
          console.log(response)
      })

}

export const createSession = async (email: string, password: string) => {
    return api.post("/paciente/login", { email: email, senha: password })
}

export const createPaciente = async (nome: string,
    cpf: string, plano: string, sexo: string,
    email: string, rua: string, numero: string,
    bairro: string, cep: string, municipio: string,
    estado: string, hipertensao: boolean, diabetes: boolean,
    fuma: boolean, alergia: boolean, bebida_alcoolica: boolean,
    medicamento: string, senha: string) => {
    return api.post("/paciente/signin", {
        nome: nome, cpf: cpf, planoSaude: plano,
        sexo: sexo, email: email, rua: rua, numero: numero,
        municipio: municipio, bairro: bairro, cep: cep, estado: estado,
        hipertensao: hipertensao, diabetes: diabetes, fuma: fuma,
        alergia: alergia, bebidaAlcoolica: bebida_alcoolica,
        medicamentoUso: medicamento, senha: senha
    })
}



export const selectCards = async (parametro: string) => {
    let path = "/pesquisa/" + parametro

    return api.get(path)
}

export const getStats = async () => {

    return api.post("stats")
}

