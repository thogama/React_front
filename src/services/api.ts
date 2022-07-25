import axios from "axios"


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



export const createPaciente = async(e:any,file:any,values:any,selects:any)=>{
        const data = new FormData()
        data.set("foto", file)

        data.set("plano",values.plano)

        data.set("sexo",selects.sexo)
        data.set("fuma",selects.fuma)
        data.set("hipertensao",selects.hipertensao)
        data.set("diabetes",selects.diabetes)
        data.set("alergia",selects.alergia)
        data.set("bebidaAlcoolica",selects.bebida_alcoolica)
        data.set("medicamentoUso",selects.medicamento)
        data.set("cep",values.CEP)
        data.set("email",values.email)
        data.set("senha",values.senha)
        data.set("nome",values.nome)

        data.set("bairro",values.bairro) 
        data.set("cpf",values.cpf)
        data.set("rua",values.rua)
        data.set("numero",values.numero)
        data.set("municipio",values.municipio)
        data.set("estado",values.estado)
        console.log(data)
        //const baseURL = "https://backend-orcilink.herokuapp.com/"
        const baseURL = "http://localhost:3333/paciente/signin"
    
          axios.post(baseURL,data,).then((response)=>{
              console.log(response)
          })
    
    }




export const selectCards = async (parametro: string) => {
    let path = "/pesquisa/" + parametro

    return api.get(path)
}

export const getStats = async () => {

    return api.post("stats")
}

