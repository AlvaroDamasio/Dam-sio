import tabletImage from "../../assets/tablet-image.png"
import "./section.css"


export default function Section(){
   
    return(
        <div className = "section-container">
            <img  src={tabletImage}></img>
        </div>
    )
}