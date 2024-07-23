import { Container } from './styled'


export function Button({title, isDark,  ...rest}){
    return(
        <Container 
         type='button'
         $isdark={isDark}
         {...rest}
         
         >
            {title}
        </Container>
    )
}