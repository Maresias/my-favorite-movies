import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Brand, InputArea, Textarea, Markers,  ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
 
export function CreateMovie(){
    return (
        <Container>
            <Header/>
            <main>
                <Content>

                    <Brand>
                        <div>
                            <FiArrowLeft/>
                            <ButtonText title={"Voltar"}/>
                        </div>
                        <h1>Novo filme</h1>
                    </Brand>

                   
                    <InputArea>

                        <Input type="text" placeholder="Titúlo"/>
                        <Input type="text" placeholder="Sua Nota de (0 a 5)"/>

                    </InputArea>

                    <Textarea/>

                    <Markers>
                        <h2>Marcadores</h2>
                       <div>
                            <span>Aqui</span>
                            <span>Sabelar</span>
                       </div>
                    </Markers>

                    <ButtonArea>
                        <Button title="Excluir Filme"/>
                        <Button title="Salvar Alterações"/>
                    </ButtonArea>
                </Content>
            </main>
        </Container>
    )
}