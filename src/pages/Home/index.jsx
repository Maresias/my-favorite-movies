import { Box, Container, Content, NewMovie } from './styles'
import { FiPlus } from 'react-icons/fi'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

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
                <Section title={"Homen Aranha"}>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus nemo debitis hic suscipit dolor veniam impedit deserunt tenetur perspiciatis veritatis consequatur possimus doloribus porro totam, iure dolore corrupti aperiam.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi quisquam deleniti quidem, magni enim expedita obcaecati recusandae ea voluptates laudantium debitis necessitatibus quos voluptate adipisci excepturi, accusamus dolorum temporibus?</p>
                </Section>

                <Section title={"Super Man"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus possimus assumenda velit, esse dicta aut deserunt explicabo voluptates dolores, voluptatibus aliquid saepe amet dolore nemo molestiae ab quisquam nesciunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptates totam corporis dignissimos sed laudantium eveniet ut, reprehenderit rem cum magni corrupti odit, facere, suscipit perferendis fugit nisi unde optio.</p>
                </Section>
                
                <Section title={"Batman"}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem blanditiis beatae vel alias quod iure libero iusto placeat, dignissimos dolores ut dolor non recusandae tenetur delectus unde? Veritatis, minima porro!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sit fugiat dignissimos praesentium atque suscipit delectus est exercitationem quibusdam libero sint eligendi quod voluptatibus deserunt quasi, officiis ipsa ratione fugit.</p>
                </Section>
                <Section title={"Super Ricos"}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla obcaecati harum voluptas, labore accusamus, non exercitationem minus sit voluptatibus aperiam repellendus nihil voluptatum ratione et, commodi eius consequuntur? Fugiat, ratione.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt recusandae nam cupiditate eligendi! Soluta tempore, blanditiis ea fugiat sequi expedita ad voluptatibus consectetur ex ab debitis impedit est at nobis?</p>
                </Section>

                <Section title={"Bitcoin"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta labore sunt vitae possimus sint delectus soluta sit, suscipit quidem iste, alias culpa, laborum omnis tenetur facilis explicabo quasi quas dolorem!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minima sapiente eum, ratione ipsum mollitia doloribus nesciunt dignissimos hic itaque? Autem tenetur asperiores nisi voluptas dolor odit aut fugit voluptate?</p>
                </Section>
            </Content>
        </Container>
    )
}