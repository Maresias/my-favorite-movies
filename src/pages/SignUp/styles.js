import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    > div {
        width: 50%;
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

`