import { Container } from './styles'
import star from '../../assets/stars.svg'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'


export function MyReviews({data, onClick, ...rest}){
    return (
        <Container {...rest}
            key={String(data.id)}
            onClick={onClick}
        >
         <h1>{data.title}</h1>
         <img src={star} alt="Estrelas representado a avalição" />
         <p>{data.description}</p>

         {
            data.tag &&
            <footer>
               {
                data.tag.map( tag =>
                    <Tag key={String(tag.id)}
                       title={tag.name}/>
                )
               }
            </footer>
         }

        </Container>
    )
}