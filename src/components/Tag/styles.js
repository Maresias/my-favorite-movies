import styled from 'styled-components'

export const Container = styled.span`
    background-color: ${({ theme  }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};


    padding: .5rem;
    margin-right: .5rem;

    border-radius: .4rem;
`

