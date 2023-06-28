import "./header.css"

export default function Header(){
    return(
        <div className = "header-container">
            <ul>
                <li>
                    <a href="#about-container">Projetos</a>
                </li>

                <li>
                    <a href="#">Alvaro Damasio</a>                  
                </li>

                <li>
                   <a href="#">Contato</a>
                </li>
            </ul>
        </div>
    )
}