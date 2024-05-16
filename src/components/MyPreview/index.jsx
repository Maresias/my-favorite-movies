import { Container, Brand, Date } from './styles'

import star from '../../assets/stars.svg'
import time from '../../assets/time.svg'
import { FiArrowLeft } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'

export function MyPreview({ dados, ...rest}){
    return ( 
        <Container { ...rest }>
            <div>
                <a href="#"><FiArrowLeft/><ButtonText title={"Voltar"}/> </a>
                <Brand>
                    <h2>{dados.title}</h2>
                    <img src={star} alt="" />
                </Brand>
                <Date>
                    <p>Por {dados.name}</p>
                    <p><img src={time} alt="" /> {dados.date} As { dados.time}</p>
                </Date>
            </div>
        </Container>
    )
}