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

                <MyReviews
                    data={{
                        title: "Homen Aranha",
                        assessment: `
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quasi adipisci. Atque repellat accusamus praesentium 
                        eius! Possimus saepe earum maiores minima dolor odio ea reprehenderit nihil, labore mollitia animi cumque!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quasi adipisci. Atque repellat accusamus praesentium eius! 
                        Possimus saepe earum maiores minima dolor odio ea reprehenderit nihil, labore mollitia animi cumque!
                        `,
                        tags:[
                            {id: "1", name: "ALEXANDRE"}
                        ]
                    }}/>

            </Content>
        </Container>
    )
}