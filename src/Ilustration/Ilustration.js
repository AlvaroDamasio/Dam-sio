import "./ilustration.css"
import image from "../assets/ilustration.png"

export default function Ilustration(){
    return(

        <div className="ilustrate-container">
            <img src={image}/>
            <div className="ilustrate-image">

            </div>
        </div>
    )
}