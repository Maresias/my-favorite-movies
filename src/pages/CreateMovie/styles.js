import styled from "styled-components";

export const Container = styled.div`
`

export const Form = styled.form`

    width: 700px;
    margin: 0 auto;
    margin-top: 7rem;
    text-align: center;
    textarea {
        margin: 2rem 0;
        grid-area: TextArea;
        
        height: 200px;
        width: 90%;
        padding: 1rem;
        border: none;
        border-radius: .3rem;
        background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800};
        
        color: ${({theme }) => theme.COLORS.WHITE};
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 1rem;
        
        outline: none;
        resize: none;
        
        :hover{
            box-shadow: 0px -20px 36px -28px inset ${({ theme }) => theme.COLORS.BACKGROUND_600};
        }
    }
    button {
        width: 70%;
    }
    `