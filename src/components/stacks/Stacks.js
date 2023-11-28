import { useLayoutEffect, useRef } from "react"
import "./stacks.css"
import gsap from "gsap"
export default function Stacks(){
  const wordRef = useRef(null)
  useLayoutEffect(()=>{

    let tween = gsap.to(".stacks", {
      xPercent: -50,
      repeat: -1,
      duration: 9,
      ease: "linear",
      yoyo: true
  
    }).totalProgress(0.5)
  })
    return(
        <div className="stack-container">
            <div className="stacks"  >
                <h1 >
                   CSS 
                </h1>
                <h1>
                   JAVASCRIPT
                </h1>
                <h1>
                   PYTHON
                </h1>
                <h1>
                  PHP
                </h1>
                <h1>
                  REACT-NATIVE
                </h1>
                <h1>
                  REACT
                </h1>
                <h1>
                  NODE.JS
                </h1>
            </div>
            <div className="stacks"  >
                <h1>
                   REACT
                </h1>
                <h1>
                   PYTHON
                </h1>
                <h1>
                   NODE.JS
                </h1>
                <h1>
                  JAVASCRIPT
                </h1>
                <h1>
                  PHP
                </h1>
                <h1>
                  REACT-NATIVE
                </h1>
                
            </div>
        </div>
    )
}