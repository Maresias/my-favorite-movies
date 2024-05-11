import { Container } from './styles'
import ii from '../../assets/stars.svg'


export function Section(){
    return (
        <Container>
            <h1>Filme</h1>
            <img src={ii} alt="" />
        </Container>
    )
}