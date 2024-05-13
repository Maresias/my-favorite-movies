import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content, Brand, InputArea, Textarea, Markers,  ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'

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

                        <Input type="text"/>
                        <Input type="text"/>

                    </InputArea>

                    <Textarea/>

                    <Markers>
                        <span>carro</span> <span> carro</span>
                    </Markers>

                    <ButtonArea>
                        <button>maresias</button>
                        <button>saosenastiao</button>
                    </ButtonArea>
                </Content>
            </main>
        </Container>
    )
}