import { Container } from './styles'
import star from '../../assets/stars.svg'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'


export function MyReviews({data, ...rest}){
    return (
        <Container {...rest}
            key={String(data.id)}
        >
         <Link to={"/moviepreview"}>{data.title}</Link>
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