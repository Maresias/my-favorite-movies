import { Box, Container, Content, NewMovie } from './styles'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { MyReviews } from '../../components/MyReviews'

import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home(){


    useEffect(()=>{
        async function getNotes() {
            const  dados  = await api.get("/notes/")
            console.log(dados)
        }
        getNotes()
    },[])

    return (
        <Container>
            <Header/>
            <Box>
                <h2>Meus Filmes</h2>
                <NewMovie to={"/ratemovie"}>
                    <FiPlus/>
                    Avaliar Filme
                </NewMovie>
                <NewMovie $isAdd to={"/createmovie"}>
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
                            {id: "1", name: "Aventura"},
                            {id: "2", name: "Ação"},
                            {id: "3", name: "Super-herói"}
                        ]
                    }}/>

                <MyReviews
                    data={{
                        title: "Batman",
                        assessment: `
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quasi adipisci. Atque repellat accusamus praesentium 
                        eius! Possimus saepe earum maiores minima dolor odio ea reprehenderit nihil, labore mollitia animi cumque!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quasi adipisci. Atque repellat accusamus praesentium eius! 
                        Possimus saepe earum maiores minima dolor odio ea reprehenderit nihil, labore mollitia animi cumque!
                        `,
                        tags:[
                            {id: "1", name: "Anti-Social"},
                            {id: "2", name: "Ação"},
                            {id: "3", name: "Super-herói"}
                        ]
                    }}/>

                <MyReviews
                    data={{
                        title: "Piratas",
                        assessment: `
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quasi adipisci. Atque repellat accusamus praesentium 
                        eius! Possimus saepe earum maiores minima dolor odio ea reprehenderit nihil, labore mollitia animi cumque!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, quasi adipisci. Atque repellat accusamus praesentium eius! 
                        Possimus saepe earum maiores minima dolor odio ea reprehenderit nihil, labore mollitia animi cumque!
                        `,
                        tags:[
                            {id: "1", name: "Aventura"},
                            {id: "2", name: "Ação"},
                            {id: "3", name: "Ladrões"}
                        ]
                    }}/>

            </Content>
        </Container>
    )
}