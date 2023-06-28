import { Title } from "../utils/Title"
import "./styles.css"
import { Container, Line, SectionTimeLine, TimeLineContainer } from "./timeLineStyles"


export default function TimeLine(){


    return(
        <Container>
            <Title>
                Minha linha do tempo
            </Title>
                <TimeLineContainer>                   
                    <Line/>
                    <SectionTimeLine>
                        <div>
                            <span>2018</span>
                            <h3>Comecei estudar programação</h3>
                        </div>
                    </SectionTimeLine>

                    <SectionTimeLine>
                        <div>
                            <span>2021</span>
                            <h3>Me certifiquei em Desenvolvimento de Aplicações mobile pelo SENAC-BA</h3>
                        </div>
                    </SectionTimeLine>

                    <SectionTimeLine>
                        <div>
                            <span>2022</span>  
                            <h3>Me Formei em Analise e Desenvolvimento de Sistemas</h3>
                        </div>
                    </SectionTimeLine>
                    <SectionTimeLine>
                        <div>
                            <span>2023</span>  
                            <h3>...</h3>
                        </div>
                    </SectionTimeLine>
                </TimeLineContainer>
            

            <div>
                <h4>
                    Precisa de um Programador?
                </h4>
                <h1>    
                    Vamos trabalhar juntos
                </h1>
            </div>
            
        </Container>
    )
}