import { Box, Container, Content, NewMovie, Frame } from './styles'
import { FiPlus } from 'react-icons/fi'


import { Header } from '../../components/Header'
import { MyReviews } from '../../components/MyReviews'
import { Tag } from '../../components/Tag'

export function Home(){
    return (
        <Container>
            <Header/>
            <Box>
                <h2>Meus Filmes</h2>
                <NewMovie>
                    <FiPlus/>
                    Adicionar Filme
                </NewMovie>
            </Box>
            <Content>
                <MyReviews title={"Homen Aranha"}>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus nemo debitis hic suscipit dolor veniam impedit deserunt tenetur perspiciatis veritatis consequatur possimus doloribus porro totam, iure dolore corrupti aperiam.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi quisquam deleniti quidem, magni enim expedita obcaecati recusandae ea voluptates laudantium debitis necessitatibus quos voluptate adipisci excepturi, accusamus dolorum temporibus?</p>
                   <Frame>
                     <Tag title="Aventura"/>
                     <Tag title="Acão"/>
                     <Tag title="Herói"/>
                   </Frame>
                </MyReviews>
            </Content>
        </Container>
    )
}