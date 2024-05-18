import styled from "styled-components";

export const Container = styled.button`
        padding: .8rem;
        border-radius: .8rem;
        border: none;

        cursor: pointer;
        background-color: ${({theme, $isdark}) => $isdark ? theme.COLORS.BLACK : theme.COLORS.PINK};
        color: ${({ theme, $isdark}) => $isdark ? theme.COLORS.PINK : theme.COLORS.BLACK};
        width: 100%;
`