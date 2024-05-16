import styled from 'styled-components'

export const Container = styled.div`

    > div{
        display: grid;
        gap: 1rem;
        padding: 1rem;

        > a, button{
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        a{
            display: flex;
            align-items: center;
            
        }
    }
    
`

export const Brand = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    > h2 {
        font-size: 3rem;
        font-weight: 400;
        color: ${({ theme}) => theme.COLORS.WHITE};
    }

    > img {
        width: 10rem;
    }
`

export const Date = styled.div`
    display: flex;
`
