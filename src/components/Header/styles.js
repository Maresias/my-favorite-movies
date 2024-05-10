import styled from "styled-components";

export const Container = styled.header`
    border-bottom: 1px solid white;
    height: 11rem;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    h1{
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > div{
        display: flex;
        flex-direction: row-reverse;
        gap: 0.5rem;


        strong {
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        > img{
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            object-fit: cover;

            border: 1px solid ${({ theme}) => theme.COLORS.GRAY_200};
        }

        >div {
            display: flex;
            flex-direction: column;
            align-items:flex-end;
            justify-content: center;
        }
    }

`


