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
            
            
                <div>
                    <h3 className="subtitle">
                    I am a full stack 
                    developer and  web design
                    </h3>
                </div>
                <div className="title">
                    <h1>
                        Hello
                    </h1>
                    <h1>
                        I am
                    </h1>
                    <h1>
                        Álvaro Damásio
                    </h1>
                </div>
                <div className="media">
                    <ul>
                        <li>
                            <a>
                                Github
                            </a>
                        </li>
                        <li>
                            <a>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            
        </div>
    )
}