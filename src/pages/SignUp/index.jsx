import { useState } from "react"
import { Container, Brand, Form } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Background } from '../../components/Background'

export function SignUp(){
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")


    function handleSignUp() {
        console.log(name, email, password)
    }
    return (
        <Container>
            <div>
                <Brand>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                </Brand>

                <Form>
                    <legend>
                        Crie sua conta
                    </legend>

                    <Input 
                        icon={FiUser} 
                        placeholder="Nome" 
                        type="text"
                        onChange={ e => setName( e.target.value )}
                    />

                    <Input 
                        icon={FiMail} 
                        placeholder="E-Mail" 
                        type="text"
                        onChange={ e => setEmail( e.target.value )}
                    />

                    <Input
                        icon={FiLock} 
                        placeholder="Senha" 
                        type="password"
                        onChange={ e => setPassword( e.target.value )}
                    />

                    
                </Form>
                <Button 
                        title={"Cadastrar"}
                        onClick={handleSignUp}
                    />

                <Link to={"/"}><FiArrowLeft/> Voltar para o login</Link>
            </div>

            <Background/>
        </Container>
    )
}