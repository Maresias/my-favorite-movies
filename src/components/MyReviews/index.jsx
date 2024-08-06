import { Container } from './styles'
import star from '../../assets/stars.svg'
import { Tag } from '../Tag'
import { Link } from 'react-router-dom'


export function MyReviews({data, ...rest}){
    return (
        <Container {...rest}
            key={data.id} 
        >
         <Link to={"/moviepreview"}>{data.title}</Link>
         <img src={star} alt="Estrelas representado a avalição" />
         <p>{data.description}</p>

         {
            data.tags &&
            <footer>
               {
                data.tags.map( tag =>
                    <Tag key={tag.id}
                       title={tag.name}/>
                )
               }
            </footer>
         }

        </Container>
    )
}