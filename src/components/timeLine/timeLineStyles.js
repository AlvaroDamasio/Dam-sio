import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: var(--main-bg-color-light);
    text-align: center;
    
    
`

export const TimeLineContainer = styled.div`
    padding-bottom: 400px;
    max-width: 800px;
    height: auto;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 100px;
    

`





export const Line = styled.div `
    width: 5px;
    height: 11.3%;
    background-color: black;
    position: absolute;
    left: 10%;

    @media (min-width: 700px) {
        left: 50%; 
        height: 15%;   
    }
    

    &::before{
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        border-radius: 50%;
        left: -5px;
        top: 0;
        background-color: black;
    }
    &::after{
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        border-radius: 50%;
        left: -5px;
        top: 99%;
        background-color: black;

        
    }
    
`

export const SectionTimeLine = styled.div `
    background-color: var(--main-bg-color-dark);
    justify-content: center;
    border-radius: 0px 20px  20px  20px; 
    display: flex;
    margin: 10px;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    grid-area: "section";
    text-align: center;
    position: relative;
    @media (min-width: 800px) {
        
        border-radius: 20px 0;
        
    }

    
    

    &::before{
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        background-color: var(--main-bg-color-dark);
        top: 5%;
        left:-2%;
        transform: rotate(45deg);
        z-index: 2;

        @media (min-width: 800px) {
            left:97%;
            background-color: var(--main-bg-color-dark);
        }
        
    }

    div{
        color: white;
    }
  

   
` 
