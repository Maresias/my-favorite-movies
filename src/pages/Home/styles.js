import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
    max-width: 900px;
    margin: 0 auto;

    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Content = styled.div`
    background-color: gray;
    max-width:  900px;
    margin: 0 auto;
    height: 700px;
`


