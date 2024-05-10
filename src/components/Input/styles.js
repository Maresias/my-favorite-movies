import styled from 'styled-components'

export const Container = styled.input`
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    padding: 1.2rem;
    border: none;
    border-radius: .7rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-weight: 500;
`