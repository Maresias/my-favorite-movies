import { Container, Content } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'

export function CreateMovie(){
    return (
        <Container>
            <Header/>
            <main>
                <Content>
                    <div>
                        <h1>novo filme</h1>
                    </div>
                    <Input type="text"/>
                    <Input type="text"/>
                    <textarea name="" id=""></textarea>
                    <div>
                        <span>carro</span> <span> carro</span>
                    </div>

                    <button>maresias</button>
                    <button>saosenastiao</button>
                </Content>
            </main>
        </Container>
    )
}