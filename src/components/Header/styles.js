import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    border-bottom: 1px solid white;
    height: 8rem;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 2rem;

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;

        border: 1px solid ${({ theme}) => theme.COLORS.GRAY_200};
        }
    
    
    h1{
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > div{
        display: flex;
        gap: 0.5rem;

        strong {
            color: ${({theme}) => theme.COLORS.WHITE};
        }

        >div {
            min-width:170px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items:flex-end;
            justify-content: center;

            a {
                color: ${({ theme }) => theme.COLORS.GRAY_200};


                &:hover{
                    color: ${({theme}) => theme.COLORS.WHITE};
                }
            }
        }


    }

`

export const Brand = styled.div`
    width: 100%;
    align-items: center;

    h1{
        margin-right: 1rem;
    }
`


