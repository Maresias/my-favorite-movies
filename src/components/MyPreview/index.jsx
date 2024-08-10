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
            { ...rest }
        >
            
            {
                data.map( dado =>
                    <div key={String(dado.id)}>
                        <Link to={"/"}><FiArrowLeft/><ButtonText title={"Voltar"}/> </Link>
                        <Brand>
                            <h2>{dado.title}</h2>
                            <img src={star} alt="" />
                        </Brand>
                        <Date>
                            <img src={avatar} alt="foto do usúario" />
                            <p>Por {user.name}</p>
                            <p><img src={time} alt="" />  As {dado.updated_}</p>
                        </Date>
                        <Content>

                            <p>{dado.description}</p>
                                {
                                    dado.tag &&
                                        <footer>
                                            {
                                                dado.tag.map( tag =>
                                                    <Tag
                                                    key={String(tag.id)}
                                                    title={tag.name}
                                                    />
                                                )
                                            }
                                        </footer>
                                }
                        </Content>

                    </div>
                )
            }

        </Container>
    )
}