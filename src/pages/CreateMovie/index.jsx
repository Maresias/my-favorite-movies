import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Brand, InputArea, Textarea, Markers,  ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
 
export function CreateMovie(){
    return (
        <Container>
            <Header/>
            <main>
                <Form>

                    <Brand>
                        <a href='/'>
                            <FiArrowLeft/>
                            Voltar
                        </a>
                        <h1>Novo filme</h1>
                    </Brand>

                   
                    <InputArea>

                        <Input type="text" placeholder="Titúlo"/>
                        <Input type="text" placeholder="Sua Nota de (0 a 5)"/>

                    </InputArea>

                    <Textarea/>

                    <Markers>
                        <h3>Marcadores</h3>
                       <div>
                            <span>Aqui</span>
                            <span>Sabelar</span>
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