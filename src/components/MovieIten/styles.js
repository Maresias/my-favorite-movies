import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 170px;
    
    background-color: ${({ theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_800};
    border-radius: 0.3rem;
    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${ theme.COLORS.GRAY_200}` : "none" };

    > input, button{
        padding: .3rem;
        border: none;
        font-size: 1rem;
        background: transparent;
    }

    > input{
        width: 100%;
        color: ${({ theme}) => theme.COLORS.WHITE };
        padding: .5rem;


        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }

    }

    > button{
        cursor: pointer;
        color: ${({ theme}) => theme.COLORS.PINK};
        
    }


`