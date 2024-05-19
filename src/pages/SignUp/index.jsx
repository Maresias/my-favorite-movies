import { Container, Brand, Form } from './styles'


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {}

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

                </Form>
            </div>
        </Container>
    )
}