import "./ilustration.css"
import image from "../../assets/ilustration.png"

import ilustration from "../../assets/pdv mockup.jpg"

export default function Ilustration(){
    return(

        <div className="ilustrate-container">
            <img src={image} className="object-image"/>
            <div className="ilustrate-image">
                <img src={ilustration}/>
            </div>
        </div>
    )
}