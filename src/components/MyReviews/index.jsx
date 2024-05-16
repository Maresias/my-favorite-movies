import { Container } from './styles'
import star from '../../assets/stars.svg'
import { Tag } from '../Tag'
import { RiH1 } from 'react-icons/ri'


export function MyReviews({data, ...rest}){
    return (
        <Container {...rest} >
         <h3>{data.title}</h3>
         <img src={star} alt="Estrelas representado a avalição" />
         <p>{data.assessment}</p>

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