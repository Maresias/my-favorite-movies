import { Container, Brand, Form } from './styles'

import { FiArrowLeft } from 'react-icons/fi'

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

                    <Input/>
                    <Input/>
                    <Input/>
                    <Button title={"Cadastrar"}/>
                    <a href="#"><FiArrowLeft/> Voltar para o login</a>
                </Form>
            </div>

            <Background/>
        </Container>
    )
}