import styled from "styled-components";

export const Container = styled.header`
    border-bottom: 1px solid white;
    height: 11rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    h1{
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`


