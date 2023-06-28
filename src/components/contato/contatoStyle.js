import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: auto;
    background-color: var(--main-bg-color-dark);
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 800px) {
        flex-direction: row;
        height: 50vh;
    }

    a{
        color: white;
        text-decoration: none;
    }
`
export const Section = styled.div `
    padding: 20px;
`