import "./hero.css"
import monster from '../../assets/monster hand.png'
export default function Hero(){
    return(
        <div className="container-hero">
            <div className="hero-title-wrapper">
                <h1></h1>
                <h1>OLÁ SOU SEU NOVO WEB-DESIGN</h1>
                <h1></h1>
            </div>
            <div className="hero-subtitle">
                <h3>
                    Lunchbox é a única solução de restaurante aberta e escalável
                    que permite catering B2B, pedidos multicanais e envolvimento
                    de hóspedes para operações empresariais em uma única plataforma. 
                </h3>
            </div>
            <div className="hero-button">
                <a>
                    <h3>
                        SHOW A EXAMPLE
                    </h3>
                </a>
            </div>

            <img src={monster}></img>
        </div>
    )
}