import { Container } from './styled'


export function Button({title, isDark,  ...rest}){
    return(
        <Container 
         $isdark={isDark}
         {...rest}
         
         >
            {title}
        </Container>
    )
}