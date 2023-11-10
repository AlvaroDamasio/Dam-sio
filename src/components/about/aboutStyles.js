import styled from "styled-components";

export const AboutContainer = styled.div `
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: #CCEBFD;

`

export const FlexContainer = styled.div `
    
    width: 70vw;
    height: 70vh;
    display: flex;
`
export const CardContainer= styled.div `
    position: relative;
    width: 50%;
    height: 100%;
`

export const TitleContainer = styled.div `   
    width: 50%;
    height: 100%;
    gap: 50px;

`

export const SubTitle = styled.h2`
    font-size: 28px;
    color: black;
    font-weight: 300 ;
    line-height: normal; 

`
export const Article = styled.h3`
    font-size: 20px;
    color: black;
    font-weight: 300 ;
    line-height: normal; 

`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 400 ;
    line-height: normal; 
`
export const Card = styled.div`
    position: relative;
    z-index: 2;
    width: 405px;
    height: 276px;
    flex-shrink: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, #388AB8 0%, rgba(68, 160, 211, 0.96) 100%); 
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        height: 90%;
    }
`
export const BackCard = styled.div`
    width: 385px;
    height: 258px;
    position: absolute;
    flex-shrink: 0; 
    border-radius: 20px;
    background: linear-gradient(180deg, #FCADAD 0%, rgba(68, 160, 211, 0.00) 100%);
    top: -30px;
    left: 90px;
`


export const Button = styled.div`
    background-color: #48A2D2;
    cursor: pointer;
    width: 209px;
    height: 57px;
    flex-shrink: 0; 
    border-radius: 20px; 
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20%;
`