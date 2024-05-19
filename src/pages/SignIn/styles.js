import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;

    > img {
        width: 50%;
        opacity: 0.4;
    }

    > div {
        width: 50%;
        display: grid;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
`
export const Form = styled.form`
    margin-top: -50px;
    width: 400px;
    display: grid;
    > legend {
        margin: 3rem 0;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    :nth-child(3){
        margin-bottom: .5rem;
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
