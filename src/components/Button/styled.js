import styled from "styled-components";

export const Container = styled.button`
        padding: .8rem;
        border-radius: .8rem;
        border: none;

        cursor: pointer;
        background-color: ${({theme, $isdark}) => $isdark ? theme.COLORS.BLACK : theme.COLORS.PINK};
        color: ${({ theme, $isdark}) => $isdark ? theme.COLORS.PINK : theme.COLORS.BLACK};
        width: 100%;

        &:hover{
            transition: .7s;
            border: ${({theme, $isdark}) => $isdark && `1px solid ${theme.COLORS.PINK}`};

            box-shadow: ${({ theme, $isdark }) => !$isdark && `0px 8px 24px ${theme.COLORS.PINK}` };
            
        }
`