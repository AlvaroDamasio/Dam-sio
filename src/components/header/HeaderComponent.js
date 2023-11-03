import { useLayoutEffect } from "react"
import "./header.css"
import { gsap } from "gsap"

export default function Header(){
    useLayoutEffect(()=>{
        gsap.fromTo('.projetos', {
            opacity: 0,
            x: -20,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            x: 20,
            ease: "Power1.easeInOut"
        },0.5)

        gsap.fromTo('.name', {
            opacity: 0,
            x: -20,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            x: 20,
            ease: "Power1.easeInOut"
        },0.8)

        gsap.fromTo('.contato', {
            opacity: 0,
            x: -20,
            ease: "Power1.easeInOut",
        },
        {opacity: 1,
            x: 20,
            ease: "Power1.easeInOut"
        },1)






    })


    return(
        <div className = "header-container">
            <ul>
                <li className="projetos">
                    <a href="#about-container">Projetos</a>
                </li>

                <li className="name">
                    <a href="#">Alvaro Damasio</a>                  
                </li>

                <li className="contato">
                   <a href="#">Contato</a>
                </li>
            </ul>
        </div>
    )
}