import styled from 'styled-components'


export const Container = styled.div`

    header{
    display: flex;
    align-items: center;
    padding-left: 10rem;
    width: 100%;
    height: 10rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    > a {
         display: flex;
         align-items: center;
         gap: .5rem;
         color: ${({ theme }) => theme.COLORS.PINK};


         > button {
            color: ${({ theme }) => theme.COLORS.PINK} ;
         }
    }
    }
`


export const Avatar = styled.div`
    text-align: center;
    margin-top: -130px;
    > img {
        width: 250px;
        border-radius: 50%;
    }

    > Input {
        display: none;
    }


`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    margin: 0 auto;
`