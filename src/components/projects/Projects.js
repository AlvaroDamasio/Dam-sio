import "./projects.css"
import image from "../../assets/Desktop - 2.png"
export default function Project(props){
    return(
        <div className="project-container">
            <div className="project-wrapper">
                <div className={props.position == "rigth" ? "project-wrapper-titles rigth": "project-wrapper-titles"} >
                    <div className="project-title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="project-subtitle">
                        <h2>
                            {props.subtitle}
                        </h2>
                    </div>
                    <div className="project-text">
                        <p>
                           Informações adicionais
                        </p>
                    </div>
                    <div className="project-button">
                        <a href={props.url}>
                            <h1>
                                VER PROJETO
                            </h1>
                        </a>
                    </div>
                </div>
                <div className="project-wrapper-image">
                    <img src={props.image} className="project-image">

                    </img>
                </div>
            </div>
            
        </div>

        
    )
}