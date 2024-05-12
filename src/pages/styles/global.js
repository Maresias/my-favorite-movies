import { createGlobalStyle } from 'styled-components' 


export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothings:grayscale;
        -moz-font-smoothings:antialiased;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 3px;
        
    }


    

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-family: "Roboto", sans-serif;
    }

    a {
        text-decoration: none;
    }
`