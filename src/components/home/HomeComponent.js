import logo from "../../assets/logo.png"
import Header from "../header/HeaderComponent"
import "./home.css"

export default function Home (){
    return(
        <div className = "home-container">
            
            <div className= "home-logo">
                <img src = {logo} alt="alvaro"></img>
                <h1>ANALISTA E DESENVOLVEDOR DE SISTEMAS</h1>
            </div>
        </div>
    )
}