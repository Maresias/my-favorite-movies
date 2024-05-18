import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: .3rem;
    font-weight: 500;
    width: 1005;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-radius: .7rem;

    > input {
        width: 100%;
        height: 3rem;

        border: none;
        background: transparent;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        padding: 0.5rem;
        font-size: 1rem;
    }
`