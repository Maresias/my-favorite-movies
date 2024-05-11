import { Container } from './styles'
import ii from '../../assets/stars.svg'


export function Section({title, ...rest}){
    return (
        <Container {...rest}>
            {title}
            <img src={ii} alt="" />
        </Container>
    )
}