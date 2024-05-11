import { Container } from './styled'


export function Button({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}