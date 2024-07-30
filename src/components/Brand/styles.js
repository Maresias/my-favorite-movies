import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-left: 1rem;
    a {
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        gap: .6rem;
        font-size: 1.3rem;
    }

    svg{
        font-size: 1.2rem;
    }

    h1 {
        margin: 1.7rem 0 2rem;
    }
`