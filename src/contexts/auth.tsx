
import React, { createContext, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { api, createSession } from "../services/api"


interface ContextInterface {
    invalid: Boolean
    authenticated: Boolean
    user: Object | null
    data: JSON  |null
    login: (user: string, password: string) => void | null
    logout: () => void | null
}

export const AuthContext = createContext<ContextInterface | any>(null)



interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({ "email": "", "password": "" })
    const [load, setLoad] = useState(true)
    const [invalid,setInvalid] = useState(true)
    const [all,setAll] = useState({})

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")


        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
        setLoad(false)
    }, [])
    const login = async (email: string, password: string) => {

        const alertar = ()=>{
            if(invalid)
                console.log("aaaa")
    }
        const response = createSession(email, password).then((response)=>{
            const loggedUser = response.data.user
            const token = response.data.token
            const nome = response.data.nome
            const foto = response.data.foto
            localStorage.setItem("user", JSON.stringify(loggedUser))
            localStorage.setItem("token", token)
            localStorage.setItem("nome", nome)
            localStorage.setItem("foto",foto)

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            
            setAll(response.data)
            setUser(loggedUser)
            setInvalid(false)
            navigate("/home")
           
        }).catch((err)=>{
            setInvalid(true)
            alertar()
        });
            
        

    }
    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("nome")
        localStorage.removeItem("foto")

        api.defaults.headers.common["Authorization"] = "";

        setUser({ "email": "", "password": "" })
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{authenticated: !!(user.email.length !== 0), all, load,invalid, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}