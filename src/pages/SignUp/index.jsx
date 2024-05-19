import { Container, Brand, Form } from './styles'


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
                    <Button/>
                    <a href="#">Criar conta</a>
                </Form>
            </div>

            <Background/>
        </Container>
    )
}