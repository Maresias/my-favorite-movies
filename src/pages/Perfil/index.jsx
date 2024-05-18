import { Container, Avatar, Form} from './styles'

import { FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'

export function Perfil (){
    return (
        <Container>
            <header>
                <a href='#'>
                    <FiArrowLeft/>
                    <ButtonText title={"Voltar"}/>
                </a>
            </header>

            <Avatar>
                <img src="https://www.github.com/Maresias.png" alt="" />

            </Avatar>
                <Form>

                </Form>
        </Container>
    )
}