import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { MyPreview } from '../../components/MyPreview'



export function MoviePreview(){
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
                            ]
                        }}
                   />
                </Content>
            </main>
        </Container>
    )
}