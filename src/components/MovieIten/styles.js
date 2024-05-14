import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 170px;
    padding: .5rem;
    background-color: ${({ theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_800};
    border-radius: 0.3rem;

    > input, button{
        padding: .3rem;
        border: none;
        font-size: 1rem;
        background: transparent;
    }

    > input{
        width: 100%;
        color: ${({ theme}) => theme.COLORS.WHITE };


        &placeholder{
            color: rebeccapurple;
        }
    }

    > button{
        cursor: pointer;
        color: ${({ theme}) => theme.COLORS.PINK};
    }


`