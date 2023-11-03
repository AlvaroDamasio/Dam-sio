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
            repeat:1,
            repeatDelay:2,
            yoyo:true
            
          }, 3);
        

        gsap.fromTo('.logo', {
            opacity: 0,
            y: 200,
            ease: "Power1.easeInOut",
            },
            {opacity: 1,
                y: 0,
                ease: "Power1.easeInOut"
            },1.5
        )  

        gsap.fromTo('.text', {
            opacity: 0,
            y: 200,
            ease: "Power1.easeInOut",
            },
            {opacity: 1,
                y: 0,
                ease: "Power1.easeInOut"
            },1.8
        ) 
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