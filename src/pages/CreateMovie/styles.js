import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    
`

export const Content = styled.div`
    display: grid;
    gap: 4rem;

    max-width: 1200px;
    height: 100vh;
    margin: 5rem auto 0;

    overflow-y: scroll;

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
`
export const ButtonArea = styled.div`
    grid-area: ButtonArea;
`