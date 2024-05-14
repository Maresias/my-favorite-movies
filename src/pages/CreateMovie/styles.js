import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: grid;
    height: 100vh;

    > main {
        overflow-y: scroll;
        width: 1200px;
        margin: 0 auto;
    }
    
`

export const Content = styled.div`
    display: grid;
    gap: 4rem;
    overflow-y:scroll;
    max-width: 1200px;
    height: 100vh;
    height: 100vh;
    margin: 5rem auto 0;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
    "Brand Brand"
    "InputArea InputArea"
    "TextArea TextArea"
    "Markers Markers"
    "ButtonArea ButtonArea"
    ;
`
export const Brand = styled.div`
    grid-area: Brand;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > div {
        color: ${({ theme }) => theme.COLORS.PINK};
        Button{
            
            margin-left: .7rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        margin-bottom: 1.6rem;
    }
`
export const InputArea  = styled.div`
    grid-area: InputArea;
    display: flex;
    flex-direction: row;
    gap: 3rem;
`
export const Textarea  = styled.textarea`
    grid-area: TextArea;

`

export const Markers = styled.div`
    grid-area: Markers;

    > h3 {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > div {
        background-color: ${({ theme }) =>  theme.COLORS.BLACK};
        height: 5rem;
        border-radius: 1rem;
        padding: .5rem;
        margin-top: 1rem;
    }
`
export const ButtonArea = styled.div`
    grid-area: ButtonArea;
`