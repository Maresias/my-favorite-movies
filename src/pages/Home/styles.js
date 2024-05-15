import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 1030px;
    }

    
`

export const NewMovie = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    padding: .8rem;
    border-radius: .5rem;
    width: 170px;

    cursor: pointer;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width:  1000px;
    height: fit-content;
    max-height: 500px;
    overflow-y: scroll;
    padding: .2rem;

    margin: 0 auto;
    border: 2px solid ${({ theme}) => theme.COLORS.BLACK};

`
export const Frame = styled.div`
`



