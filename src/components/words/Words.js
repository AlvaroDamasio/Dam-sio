import { useLayoutEffect, useRef } from 'react'
import './words.css'
import gsap from "gsap"

export default function Words(props){
    const rowRef = useRef(null)
    useLayoutEffect(()=>{
        gsap.to(rowRef.current, {
            xPercent: -20,
            repeat: -1,
            duration: 9,
            ease: "linear",
            yoyo: true,
            duration: props.delay
            
        }).totalProgress(0.5)
    })
    return(
        <div className="words-container">
            <div className="row" ref={rowRef}>
                <h1>ANIMATION</h1>
                <h1>UX</h1>
                <h1>UI</h1>
                <h1>CSS</h1>
                <h1>ANDROID</h1>
                <h1>JAVASCRIPT</h1>
                <h1>FIGMA</h1>
                
            </div>
        </div>
    )
}