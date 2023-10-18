import logo from "../../assets/logo.png"
import "./home.css"
import {gsap} from 'gsap'
import { TextPlugin } from "gsap/all"
import {useLayoutEffect} from 'react'
import { Draggable } from "gsap/Draggable"



export default function Home (){
    

    useLayoutEffect(()=>{
        gsap.registerPlugin(TextPlugin)
        gsap.to(".text", {
            duration: 4,
            text: "SEU NOVO WEB DESIGNER",
            ease: "none",
          });
    },[])
    return(
        <div className = "home-container">
            
            <div className= "home-logo">
                <img src = {logo} className="logo" alt="alvaro"></img>
                <h1 className="text">ANALISTA E DESENVOLVEDOR DE SISTEMAS</h1>
            </div>
        </div>
    )
}