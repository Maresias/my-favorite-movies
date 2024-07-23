import { Container, Form, Brand } from './styles'
import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Background } from '../../components/Background'

import { useAuth } from "../../hooks/auth"



export function SignIn(){

    const data = useAuth()
    
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
                    <Link to={"/register"}> Criar Conta</Link>
                </Form>
            </div>
            <Background/>
        </Container>
    )
}