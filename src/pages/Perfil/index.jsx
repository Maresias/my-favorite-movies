import { Container, Avatar, Form} from './styles'

import { FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Perfil (){
    return (
        <Container>
            <header>
                <a href='#'>
                    <FiArrowLeft/>
                    <ButtonText title={"Voltar"}/>
                </a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://www.github.com/Maresias.png" alt="" />

                    <label htmlFor="avatar">
                        <Input id="avatar" type="file"/>
                    </label>
                    </Avatar>
               
                        <Input placeholder="Alexandre Correia"/>
                        <Input/>
                        <Input/>
                        <Input/>
                        <Button title={"Salvar"}/>
                </Form>
        </Container>
    )
}