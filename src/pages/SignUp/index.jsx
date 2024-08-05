import { useState } from "react"
import { Container, Brand, Form } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Background } from '../../components/Background'

import { api } from "../../services/api"

export function SignUp(){
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()


    function handleSignUp() {

        if ( !name || !email || !password){
            return alert("Preencha todos os campos")
        }

        api.post("/users", { name, email, password})
        .then(()=>{
            alert("Usuário cadastrado com sucesso!")
            navigate("/")
        })
        .catch(error => {
            if (error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        })
    }
    return (
        <Container>
            <div>
                <Brand>
                    <h1>My favorites movies</h1>
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

                    
                    <Button 
                        title={"Cadastrar"}
                        onClick={handleSignUp}
                    />

                    <Link 
                        to={"/"}>
                        <FiArrowLeft/> Voltar para o login 
                    </Link>
                </Form>
            </div>

            <Background/>
        </Container>
    )
}