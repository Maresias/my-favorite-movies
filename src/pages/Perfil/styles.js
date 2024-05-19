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
    margin-top: -115px;
    position: relative;
    margin-bottom: 50px;
    > img {
        width: 200px;
        border-radius: 50%;
    }

    > label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;

        cursor: pointer;


        position: absolute;
        left: 60%;
        top: 65%;

        background-color: ${({ theme })=> theme.COLORS.PINK};
        > input {
            display: none;
        }

        > svg{
           font-size: 40px;
        }
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 400px;
    margin: 0 auto;

    :nth-child(3){
        margin-bottom: 3rem;
    }
`