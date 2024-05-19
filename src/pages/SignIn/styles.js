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
    text-align: center;
    margin-top: -50px;
    width: 400px;
`
export const Brand = styled.div`
    h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 3.4rem;
        
    }

    p {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`
