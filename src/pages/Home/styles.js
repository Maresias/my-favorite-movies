import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
`

export const Box = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    max-width: 1000px;
    margin: 0 auto;

    h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 700px;
    }

    
`

export const NewMovie = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    background-color: ${({ theme, $isAdd }) =>  $isAdd ? theme.COLORS.GRAY_200 :theme.COLORS.PINK};
    color: ${({ theme, $isAdd }) => $isAdd ? theme.COLORS.WHITE :theme.COLORS.BACKGROUND_900};
    padding: .8rem;
    border-radius: .5rem;
    width: 200px;

    cursor: pointer;

  
    &:hover{
        transition: 0.7s;
        box-shadow: ${({ theme, $isAdd}) => $isAdd ? `0px 8px 24px ${theme.COLORS.GRAY_200}` : `0px 8px 24px${theme.COLORS.PINK}`};
    }
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

