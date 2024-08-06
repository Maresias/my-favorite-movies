import { Box, Container, Content, NewMovie } from './styles'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { MyReviews } from '../../components/MyReviews'

import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function Home(){
    const [userData, setUserData ] = useState()

    useEffect(()=>{
        async function getNotes() {
            const dados  = await api.get("/notes/")
            setUserData(dados.data)
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


                {
                    userData && 
                    userData.map( dados => (
                        <MyReviews data={dados}/>
                    ) )
                }
            </Content>
        </Container>
    )
}