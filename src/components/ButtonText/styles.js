import styled from  'styled-components'

export const Container = styled.button`
    color: ${({ theme}) => theme.COLORS.BLACK};

    background: none;
    border: none;

    font-size: 1.1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`