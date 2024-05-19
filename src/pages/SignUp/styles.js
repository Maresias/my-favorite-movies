import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    > div {
        width: 50%;
        display: grid;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
    
`

export const Brand = styled.div`
        text-align: left;
    h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 3.4rem;
        margin-left: -.2rem;
    }

    p {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`

export const Form = styled.form`
    margin-top: -50px;
    width: 400px;
    display: grid;
    gap: .7rem;
    > legend {
        margin: 3rem 0;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }



    button{
        margin: 3rem 0;
    }

    a{
        color: ${({ theme }) => theme.COLORS.PINK};
        display: inline;
        text-align: center;
    }
`