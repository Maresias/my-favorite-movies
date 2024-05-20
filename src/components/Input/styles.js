import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: .3rem;
    
    width: 1005;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-radius: .7rem;

    > input {
        width: 100%;
        height: 3rem;
        border-radius: .7rem;
        border: none;
        background: transparent;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        padding: 0.5rem;
        font-size: 1rem;
        
    }

    > svg {

       color: ${({ theme }) => theme.COLORS.GRAY_200};
       margin-left: .5rem;
       margin-right: .5rem;
    }
`