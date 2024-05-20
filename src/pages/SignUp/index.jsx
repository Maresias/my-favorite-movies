import { Container, Brand, Form } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Background } from '../../components/Background'

export function SignUp(){
    return (
        <Container>
            <div>
                <Brand>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                </Brand>

                <Form>
                    <legend>
                        Crie sua conta
                    </legend>

                    <Input icon={FiUser} placeholder="Nome" type="text"/>
                    <Input icon={FiMail} placeholder="E-Mail" type="text"/>
                    <Input icon={FiLock} placeholder="Senha" type="password"/>
                    <Button title={"Cadastrar"}/>
                    <Link to={"/"}><FiArrowLeft/> Voltar para o login</Link>
                </Form>
            </div>

            <Background/>
        </Container>
    )
}