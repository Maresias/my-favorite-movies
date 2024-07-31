import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: grid;
    height: 100vh;
    overflow-y: hidden;

    > main {
        height: 100vh;
        width: 100%;
        display: grid;
    }
    
`

export const Form = styled.form`
    display: grid;
    gap: 4rem;
    overflow-y:scroll;
    width: 880px;
    height: 550px;
    margin: 5rem auto 0;
    padding: 0.4rem;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
    "Brand Brand"
    "InputArea InputArea"
    "Markers Markers"
    "ButtonArea ButtonArea"
    ;
`

export const InputArea  = styled.div`
    grid-area: InputArea;
    display: flex;
    flex-direction: row;
    gap: 3rem;
`


export const Markers = styled.div`
    grid-area: Markers;

    > h3 {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > div {
        display: flex;
        gap: 1rem;
        align-items: center;
        background-color: ${({ theme }) =>  theme.COLORS.BLACK};
        height: 5rem;
        border-radius: 1rem;
        padding: 1rem;
        margin-top: 1rem;
    }
`
export const ButtonArea = styled.div`
    grid-area: ButtonArea;
    display: flex;
    gap: 2rem;
    > button {
        width: 100%;
    }
`