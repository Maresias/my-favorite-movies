import { Container, Avatar, Form} from './styles'
import { Link } from 'react-router-dom'

import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'



import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile (){
    return (
        <Container>
            <header>
                <Link href='#'>
                    <FiArrowLeft/>
                    <ButtonText title={"Voltar"}/>
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://www.github.com/Maresias.png" alt="" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" />
                    </label>
                    </Avatar>
               
                        <Input icon={FiUser} placeholder="Alexandre Correia" type="text"/>
                        <Input icon={FiMail} placeholder="Email" type="text"/>
                        <Input icon={FiLock} placeholder="Senha Atual" type="password"/>
                        <Input icon={FiLock} placeholder="Nova Senha" type="password"/>
                        <Button title={"Salvar"}/>
                </Form>
        </Container>
    )
}