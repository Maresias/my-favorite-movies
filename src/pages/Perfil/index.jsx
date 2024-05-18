import { Container, Avatar, Form} from './styles'

import { FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from '../../components/ButtonText'

export function Perfil (){
    return (
        <Container>
            <Avatar>
                <div>
                    <FiArrowLeft/>
                    <ButtonText title={"Voltar"}/>
                </div>
            </Avatar>
                <Form>

                </Form>
        </Container>
    )
}