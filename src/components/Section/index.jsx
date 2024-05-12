import { Container } from './styles'
import star from '../../assets/stars.svg'
import { Children } from 'react'


export function Section({title, children}){
    return (
        <Container  >
            <h3>{title}</h3>
            <img src={star} alt="" />
            { children }
        </Container>
    )
}