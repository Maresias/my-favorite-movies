import { useState } from 'react'
import { Container, Avatar, Form} from './styles'
import { Link } from 'react-router-dom'

import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'

import {useAuth} from '../../hooks/auth'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile (){

    const { user } = useAuth()

    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ passwordOld, setPassworldOld ] = useState()
    const [ passworldNew, setPassworldNew ] = useState()
    return (
        <Container>
            <header>
                <Link to={"/"}>
                
                    <FiArrowLeft/>
                    <ButtonText title={"Voltar"}/>
                </Link>
            </header>
            
            <Form>

                <Avatar>
                    <img src="https://www.github.com/Maresias.png" alt="" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <Input type="file" />
                    </label>
                    </Avatar>
               
                        <Input 
                            icon={FiUser} 
                            type="text"
                            value={name}
                            onChange={ e => setName( e.target.value)}
                        />
                        <Input 
                            icon={FiMail} 
                            type="text"
                            value={email}
                            onChange={ e => setEmail( e.target.value)}
                        />
                        <Input icon={FiLock} placeholder="Senha Atual" type="password"/>
                        <Input icon={FiLock} placeholder="Nova Senha" type="password"/>
                        <Button title={"Salvar"}/>
                </Form>
        </Container>
    )
}