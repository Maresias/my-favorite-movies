import { createGlobalStyle } from 'styled-components' 


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothings:grayscale;
        -moz-font-smoothings:antialiased;
    }

    

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-family: "Roboto", sans-serif;
    }
`