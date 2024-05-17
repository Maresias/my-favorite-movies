import { Container, Brand, Date, Content, Markers} from './styles'

import star from '../../assets/stars.svg'
import time from '../../assets/time.svg'
import { FiArrowLeft } from 'react-icons/fi'

import { ButtonText } from '../ButtonText'
import { Tag } from '../../components/Tag' 

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
                    <img src="https://github.com/Maresias.png" alt="foto do usúario" />
                    <p>Por {dados.name}</p>
                    <p><img src={time} alt="" /> {dados.date} As { dados.time}</p>
                </Date>
                <Markers>
                    {
                        dados.tags &&
                        <footer>
                           {
                            dados.tags.map(tag =>
                               <Tag key={tag.id} title={tag.nome}/>
                            )
                           }
                        </footer>
                    }
                </Markers>
            </div>
            <Content>
                <p>{dados.paragraph}</p>
            </Content>
        </Container>
    )
}