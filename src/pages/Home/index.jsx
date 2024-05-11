import { Box, Container, Content } from './styles'


import { Header } from '../../components/Header'
import { Button} from '../../components/Button'

export function Home(){
    return (
        <Container>
            <Header/>
            <Box>
                <h2>Meus Filmes</h2>

                <Button title=" + Adicionar filme"/>
            </Box>
            <Content>

            </Content>
        </Container>
    )
}