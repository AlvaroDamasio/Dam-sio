import logo from "../../assets/logo.png"
import "./home.css"
import {gsap} from 'gsap'
import { TextPlugin } from "gsap/all"
import {useLayoutEffect} from 'react'
import { Draggable } from "gsap/Draggable"
import video from "../../assets/flower.mp4"

import ScrollTrigger from "gsap/ScrollTrigger"





export default function Home (){
    

    useLayoutEffect(()=>{
        /*gsap.registerPlugin(TextPlugin)
        gsap.to("", {
            duration: 4,
            text: "",
            ease: "none",
            repeat:1,
            repeatDelay:2,
            yoyo:true
            
          }, 3);
        */
        
       
       gsap.to('.image-container',{
        scale:52,
        ease:"ease",
        scrollTrigger:{
            trigger:".video-section",
            scrub:1,
            start:"top top",
            end: "bottom",
            pin: true,
            markers: true

        }
       })

       
        
    },[])
    return(
        
        <div className="wrapper">
            <section className="video-section">
                <div className="video-container">
                    <video src={video} muted loop></video>
                </div>
                <div className="image-container">
                    
                </div>
                <div class="text-content">
                    <div class="img_txt">
                        <div class="title sm left">
                            <span>between</span>
                        </div>
                        <div class="title bg left ">
                            <span>Reality</span>
                        </div>
                        <div class="title bg right n">
                            <span>&</span>
                        </div>
                        <div class="title bg right n">
                            <span>Dream</span>
                        </div>
                    </div>
                    <p class="txt-bottom">
                        shots that will change your mind
                    </p>
                </div>

            </section>
        </div>
        
        
    )
}