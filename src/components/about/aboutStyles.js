import styled from "styled-components";

export const AboutContainer = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background-color: white;

`

export const TitleContainer = styled.div `
    
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    

    
    @media (min-width: 700px){

        flex-direction: row;
    }
   

    div{
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        text-align:center;
       
        margin: 0 5%;
        

        

        h2{
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            color: #302151;
        }

        h3{
            color: var(--main-bg-color-dark);
        }

       
    }

   

`

export const SubTitleContainer = styled.div `

    display: flex;
    align-items: center;
    flex-direction: column;
    


`

export const ImageContainer = styled.div `

    border: 1px, white;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100%;
    gap: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    ;

    @media (min-width: 800px) {
        display: grid;
        grid-template-areas: 
        "card card"
        "card card";
    }

    

`

export const ImageCard = styled.div`
    grid-area: "card";
    width: 100%;
    height: 100%;
    background-color: var(--main-bg-color-dark);
    margin: 10px;
    border-radius: 5px;
    padding-top: 3px;
    text-align: center;
    padding: 10px;


    @media (min-width: 700px){
        width: 600px;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        
    }

    img{
        width: 100%;
        height: auto;
        border-radius: 20px;
            
     }
`

export const Button = styled.div`
    background-color: white;
    cursor: pointer;
    height: 30px;
    width: 60px;
    border-radius: 10px;
    align-items: center;
`