import { Container, Form } from './styles'

import  backgroundImg from '../../assets/backgrounImg.png'

export function SingIn(){
    return (
        <Container>
            <Form>
                    <h1>MAresias</h1>
            </Form>
            <img src={backgroundImg} alt="Imagem de uma sala de cinema" />
        </Container>
    )
}