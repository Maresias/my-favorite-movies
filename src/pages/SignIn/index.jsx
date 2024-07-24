import { Container, Form, Brand } from './styles'
import { FiLock, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Background } from '../../components/Background'

import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn(){

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const {signIn} = useAuth()

    function handleSignIn(){
        signIn({ email, password })
    }
    
    return (
        <Container>
            <div>
                <Form>
                    <Brand>
                        <h1>RocketMovies</h1>
                        <p>Aplicação para acompanhar tudo que assistir </p>
                    </Brand>
                    <legend>
                        Faça seu login
                    </legend>
                    <Input 
                        icon={FiMail} 
                        type="text" 
                        placeholder="E-Mail"
                        onChange={e => setEmail( e.target.value )}
                    />
                    <Input 
                        icon={FiLock} 
                        type="password" 
                        placeholder="Senha"
                        onChange={ e => setPassword( e.target.value )}
                    />
                    <Button 
                        title={"Entra"}
                        onClick={handleSignIn}
                    />
                    <Link to={"/register"}> Criar Conta</Link>
                </Form>
            </div>
            <Background/>
        </Container>
    )
}