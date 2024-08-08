import { Container, Brand, Date, Content, Markers} from './styles'
import { Link } from 'react-router-dom'

import star from '../../assets/stars.svg'
import time from '../../assets/time.svg'
import { FiArrowLeft } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'
import { Tag } from '../../components/Tag' 

export function MyPreview({ data,user, avatar,...rest}){
    return ( 
        <Container
        key={0}
        { ...rest }
        >
            <div>
                <Link to={"/"}><FiArrowLeft/><ButtonText title={"Voltar"}/> </Link>
                <Brand>
                    <h2>{data.title}</h2>
                    <img src={star} alt="" />
                </Brand>
                <Date>
                    <img src={avatar} alt="foto do usúario" />
                    <p>Por {user.name}</p>
                    <p><img src={time} alt="" /> {} As {}</p>
                </Date>
            </div>
            <Content>
                <p>{data.description}</p>
            </Content>
        </Container>
    )
}