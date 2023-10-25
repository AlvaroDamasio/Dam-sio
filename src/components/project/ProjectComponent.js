import image from "../../assets/MacBook Air - 1 2.png"
import "./project.css"
export default function Project (){
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
    return(
        <div className="home-container">
            <img className="home-image" src={image}/>
        </div>
    )
}
