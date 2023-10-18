
import imageTablet from "../../assets/tablet image.png"
import projeto from "../../assets/tablet PROJECT.png"
import image from "../../assets/MacBook Air - 1 2.png"
import { AboutContainer, ImageContainer, TitleContainer, Button, ImageCard,SubTitleContainer } from './aboutStyles'
import { Title } from "../utils/Title"
import { Paragraph } from "../utils/paragraph"
import pdvPicture from "../../assets/pdvPicture.png"
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'


export default function About(){
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger) 
        gsap.to('.ImageCard', {
            scrollTrigger:{
                trigger: ".about",
                scrub:true
            },
            x: 0,
            opacity:1,
            rotate:"0deg",
        })    
    }, [])
    return(
        <AboutContainer className="about">
            <TitleContainer>
            
                <div>
                    <Title>
                        SOBRE
                    </Title>
                </div>
                
                <div className="about-sobremim">
                    <Title>Um pouco sobre mim</Title>
                    <Paragraph>Meu nome é Álvaro Damásio Silva Celestino, sou formado em análise e Desenvolvimento de sistemas e atuo na área de desenvolvimento de sistemas e criação de sites comérciais e pessoais  </Paragraph>
                </div>
            </TitleContainer>

            <SubTitleContainer>
                <h4>
                    Projetos selecionados
                </h4>
                <Title>
                    Estudos de Caso
                </Title>
            </SubTitleContainer>

            <ImageContainer>
                <ImageCard className="ImageCard">
                    <img src={image}></img>
                    <h2>
                        Catálogo
                    </h2>

                    <p>Site de Catalogo de uma loja de bonés feito com react, styled-component </p>
                    <div>
                        <Button>
                            <a href="https://github.com/AlvaroDamasio/catalogo/">
                                <h3>
                                    Code
                                </h3>
                            </a>
                        </Button>
                        <Button>
                        <a href="https://alvarodamasio.github.io/catalogo/">
                                <h3>
                                    Visitar
                                </h3>
                            </a>
                        </Button>
                    </div>
                </ImageCard>

                <ImageCard className="ImageCard">
                    <img src={pdvPicture}></img>
                    <h2>
                        PDV e ERP
                    </h2>
                    <p>Projeto de um programa de frente de caixa, desenvolvido em electron, e typescript </p>
                    <div>
                        <Button>
                            <a>
                                <h3>
                                    Code
                                </h3>
                            </a>
                        </Button>
                        <Button>
                        <a>
                                <h3>
                                    Visitar
                                </h3>
                            </a>
                        </Button>
                    </div>
                </ImageCard>
                

                
                
            </ImageContainer>
        </AboutContainer>
    )
}