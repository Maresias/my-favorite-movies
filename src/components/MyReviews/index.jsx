import { Container } from './styles'
import star from '../../assets/stars.svg'


export function MyReviews({title, children}){
    return (
        <Container  >
            <h3>{title}</h3>
            <img src={star} alt="" />
            { children }
        </Container>
    )
}