import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { MyPreview } from '../../components/MyPreview'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

export function MoviePreview(){

    const params = useParams()

    useEffect(() => { 
        async function preview() {
            const response = await api.get(`/notes/${params.id}`)
            console.log(response.data)
        }

        preview()
     },[])

    return (
        <Container>
            <Header/>
            <main>
                <Content>
                   <MyPreview
                        dados={{
                            title: "Batman",
                            name: "Alexandre",
                            date: "15/05/2024",
                            time: "22:29",
                            tags: [
                                {id: "1", nome: "Ação"},
                                {id: "2", nome: "Anti-Social"},
                                {id: "3", nome: "Super-Herói"}
                            ],
                            paragraph:`
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            aspernatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione a f
                            ugiat laboriosam molestiae asperiores voluptatum, alias, sunt 
                            officia nobis delectus iste, magni soluta exercitationem cum reiciendis labore 
                            aspernatur maxime.
                            `
                        }}
                   />
                </Content>
            </main>
        </Container>
    )
}