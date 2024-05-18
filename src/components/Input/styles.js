import styled from 'styled-components'

export const Container = styled.div`
    font-weight: 500;

    > input{
        width: 100%;
        height: 3rem;
        border-radius: .7rem;
        border: none;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.GRAY_100};
        padding:.5rem;
        
    }
`