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
                            time: "22:29"
                        }}
                   />
                </Content>
            </main>
        </Container>
    )
}