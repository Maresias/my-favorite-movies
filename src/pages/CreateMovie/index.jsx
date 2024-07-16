import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, Brand, InputArea, Textarea, Markers,  ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieIten } from '../../components/MovieIten'
 
export function CreateMovie(){
    return (
        <Container>
            <Header/>
            <main>
                <Form>

                    <Brand>
                        <Link to={"/"}>
                            <FiArrowLeft/>
                            Voltar
                        </Link>
                        <h1>Novo filme</h1>
                    </Brand>

                   
                    <InputArea>

                        <Input type="text" placeholder="Titúlo" required/>
                        <Input type="text" placeholder="Sua Nota de (0 a 5)" required/>

                    </InputArea>

                    <Textarea placeholder='Observações' required/>

                    <Markers>
                        <h3>Marcadores</h3>
                       <div>
                            <MovieIten  value="Batman"/>
                            <MovieIten isNew placeholder="Novo Marcador"/>
                       </div>
                    </Markers>

                    <ButtonArea>
                        <Button title="Excluir Filme" isDark/>
                        <Button title="Salvar Alterações"/>
                        
                    </ButtonArea>
                </Form>
            </main>
        </Container>
    )
}