import Header from "../layouts/Header"
import logo from "../assets2/logo-limpa.png"
import { selectCards } from "../services/api"
import { useState,useContext } from "react"
import { AuthContext } from "../contexts/auth"
import Card from "../components/Card"
export default function HomePage() {

    const [pesquisa, setPesquisa] = useState("")

    const [cards, setCards] = useState([])

    const handlePesquisa = async () => {
        const cards = await selectCards(pesquisa)

        setCards(cards.data)
        
    }

    const {  logout } = useContext(AuthContext)
        const handleLogout = () => {
            logout()
        }

    return (
        <>
            <div >
                <img style={{ marginTop: "10rem", width: "100%", opacity: "20%", position: "fixed" }} src={logo} />
            </div>
            
            <Header/>
            <Card nome="teste"/>
            <button onClick={handleLogout}>
                Deslogar
            </button>


        </>

    )
}