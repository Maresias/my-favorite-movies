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
    margin-top: 2rem;
    
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
    align-items: center;
    gap: .7rem;
    color: ${({ theme}) => theme.COLORS.GRAY_200};
    font-size: 1rem;

    > img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    P:last-child{
        display: flex;
        align-self: center;
        gap: .3rem;
        margin-left: 2rem;
    }
`
export const Markers = styled.div`
    margin-top: 3.2rem;
`
export const Content = styled.div`

`