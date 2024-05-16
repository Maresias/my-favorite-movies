import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: .6rem;
    background-color: rgb(255, 133, 155, 5%);
     
    padding: 1rem;
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    line-height: 1.6rem;

    > h3 {
        color: ${({ theme}) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 1.6rem;
    }

    > img {
        width: 10rem;
    }
    
`
