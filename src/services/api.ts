import axios from "axios"
import AppRoutes from "../routes/Router"

export const api = axios.create({
    baseURL: "https://backend-orcilink.herokuapp.com/"
    //baseURL:"http://localhost:3333"
})

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
    return api.post("/paciente", {
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

export const getStats = async ()=>{
    
    return api.post("stats")
}
     
