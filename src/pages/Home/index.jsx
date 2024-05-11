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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, a. Velit quos reiciendis labore atque animi? Sit quibusdam, omnis, pariatur necessitatibus dolorem consectetur, autem in officia neque itaque placeat perferendis?</p>
                </Section>
            </Content>
        </Container>
    )
}