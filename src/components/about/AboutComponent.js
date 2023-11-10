import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'
import { useRef } from "react"
import './about.css'


export default function About(){
    gsap.registerPlugin(ScrollTrigger)
    const el = useRef()

    useLayoutEffect(()=>{

        const races = document.querySelector(".races")
        let racesWidth = races.offsetWidth;
        let amountToScroll = racesWidth - window.innerWidth;

        const tween = gsap.to(races, {
            x: -amountToScroll,
            ease: "none",
        });

       

        
        ScrollTrigger.create({
            trigger:".races",
            start:'.races',
            end:() => "+=" + amountToScroll,
            pin: true,
            animation: tween,
            scrub: 1

        })


        
        
        
    }, [])
/*
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger) 
        gsap.to('.ImageCard', {
            scrollTrigger:{
                trigger: ".about",
                scrub:true
            },
            x: 0,
            opacity:1,
            rotate:"0deg",
        })    
    }, [])

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger) 
        gsap.to('.imageContainer', {
            scrollTrigger:{
                trigger: ".about",
                scrub:true,
                
            },
            x: 0,
            opacity:1,
            rotate:"0deg",
            width: "100%"
            
            
        })
    })*/
    return(

        <div className="racesWrapper">
            <div className='races'>
                <section className="about-section-one">
                    <h1>
                        about
                    </h1>
                </section>

                <section className="about-section-two">
                    <h1>
                        about
                    </h1>
                </section>

                <section className="about-section-tree">
                    <h1>
                        about
                    </h1>
                </section>
            </div>
            
        </div>
    )
}