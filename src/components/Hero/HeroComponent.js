
import image from "../../assets/MacBook Air - 1 2.png"
import './hero.css'
export default function Projects(){
    return(
        <div className="container-hero">
            <div className="container-paralax">
                <span className="paralax-text" text="SEU SITE">
                    SEU SITE
                </span>
            <img src={image}/>
            </div>
        </div>
    )
}