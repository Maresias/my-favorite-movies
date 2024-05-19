import { Container, Form, Brand } from './styles'
import { FiLock, FiMail } from 'react-icons/fi'

import  backgroundImg from '../../assets/backgrounImg.png'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


export function SingIn(){
    return (
        <Container>
            <div>
                <Form>
                    <Brand>
                        <h1>RocketMovies</h1>
                        <p>Aplicação para acompanhar tudo que assistir </p>
                    </Brand>
                    <legend>
                        Faça seu login
                    </legend>
                    <Input icon={FiMail} type="text" placeholder="E-Mail"/>
                    <Input icon={FiLock} type="password" placeholder="Senha"/>
                    <Button title={"Entra"}/>
                    <a href="#"><ButtonText title="Criar Conta"/></a>
                </Form>
            </div>
            <img src={backgroundImg} alt="Imagem de uma sala de cinema" />
        </Container>
    )
}