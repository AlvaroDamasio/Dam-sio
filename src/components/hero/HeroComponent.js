import "./hero.css"
import monster from '../../assets/monster hand.png'
export default function Hero(){
    return(
        <div className="container-hero">
            <div className="hero-title-wrapper">
                <h1> SOU SEU NOVO WEB DESIGN</h1> 
            </div>
            <div className="hero-subtitle">
                <h3>
                    Meu nome é Alvaro Damasio, sou graduado em análise e desenvolvimento de 
                    sistemas, tenho experiencia em ui/ux e programação.
                    Estou pronto para fazer o seu novo site
                   
                </h3>
            </div>
            <div className="hero-button">
                <a href="https://github.com/AlvaroDamasio">
                    <h3>
                        SHOW A EXAMPLE
                    </h3>
                </a>
            </div>

            <img src={monster}></img>
        </div>
    )
}