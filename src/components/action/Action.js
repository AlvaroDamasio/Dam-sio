import "./action.css"
import  image from "../../assets/mokup.jpg"
export default function Action(){
    return(
        <div className="action-container">
            <div className="action-wrapper">
                <div className="action-subtitle">
                    <h3> VAMOS TRABALHAR JUNTOS</h3>
                </div>
                <div className="action-title">
                    <h1>
                        SEU SITE COM O <span className="yellow">VISUAL INCRIVEL</span>
                    </h1>
                </div>
                
                
            </div>
            <div className="image">
                <img src={image}></img>
            </div>
            
        </div>
    )
}