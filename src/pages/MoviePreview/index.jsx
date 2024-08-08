import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { MyPreview } from '../../components/MyPreview'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

export function MoviePreview(){

    const params = useParams()
    const [ dados, setDados ] = useState([])
    const {user} = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder

    useEffect(() => { 
        async function preview() {
            const response = await api.get(`/notes/${params.id}`)
            setDados(response.data)
            
        }
        preview()
     },[])
     
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                   {
                    dados &&
                    dados.map(dado => (
                        <MyPreview data={dado} key={dado.id} user={user} avatar={avatarUrl}/>
                    ))
                   }
                    
                   
                </Content>
            </main>
        </Container>
    )
}