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
                <Section>
                    
                </Section>
            </Content>
        </Container>
    )
}