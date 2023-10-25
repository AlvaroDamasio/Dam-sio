
import imageTablet from "../../assets/tablet image.png"
import projeto from "../../assets/tablet PROJECT.png"
import image from "../../assets/MacBook Air - 1 2.png"
import { AboutContainer,Title, Article, FlexContainer,Card, BackCard, CardContainer ,TitleContainer, SubTitle, Button } from './aboutStyles'
import { Paragraph } from "../utils/paragraph"
import pdvPicture from "../../assets/pdvPicture.png"
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'
import { useRef } from "react"


export default function About(){
    const el = useRef()

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

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger) 
        gsap.to('.imageContainer', {
            scrollTrigger:{
                trigger: ".about",
                scrub:true
            },
            x: 0,
            opacity:1,
            rotate:"0deg",
            width: "100%"
            
            
        })
    })
    return(
        <AboutContainer className="about">
            <FlexContainer>
                <TitleContainer>
                    <SubTitle>
                        Project One
                    </SubTitle>
                    <Title>
                        Infos of The Project,
                        of Web Site, 
                        for you
                    </Title>
                    <Article>
                        Branding, website, design,Development
                    </Article>

                    <Button>
                        <Article>
                            View More
                        </Article>
                    </Button>
                    
                </TitleContainer>

                <CardContainer>
                    <Card><img src={image}/></Card>
                    <BackCard></BackCard>
                </CardContainer>
               
            </FlexContainer>
            
            
            
        </AboutContainer>
    )
}