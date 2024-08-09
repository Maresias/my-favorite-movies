import { Box, Container, Content, NewMovie } from './styles'
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { MyReviews } from '../../components/MyReviews'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home(){
    const [userData, setUserData ] = useState([])
    const navigate = useNavigate()

    function handlePreview(id){
        navigate(`/moviepreview/${id}`)
    }

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
                        <MyReviews key={dados.id} data={dados} onClick={ ()=> handlePreview(dados.id)}/>
                            
                    ) )
                }
            </Content>
        </Container>
    )
}