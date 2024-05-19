import { Container, Form, Brand } from './styles'

import  backgroundImg from '../../assets/backgrounImg.png'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


export function SingIn(){
    return (
        <Container>
            <div>
                <Brand>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir </p>
                </Brand>
                <Form>
                    <legend>
                        Faça seu login
                    </legend>
                    <Input/>
                    <Input/>
                    <Button title={"Entra"}/>
                    <a href="#"><ButtonText title="Criar Conta"/></a>
                </Form>
            </div>
            <img src={backgroundImg} alt="Imagem de uma sala de cinema" />
        </Container>
    )
}