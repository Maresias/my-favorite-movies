import { Container, Content, Brand, InputArea, Textarea, ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'

export function CreateMovie(){
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <Brand>
                        <h1>novo filme</h1>
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