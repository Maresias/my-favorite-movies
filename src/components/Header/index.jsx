import { Container, Brand } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import {useAuth} from "../../hooks/auth"

export function Header(){

    const { signOut } = useAuth()
    return (
        <Container>
            <Brand>
                <h1>RocketMovies</h1>
                <Input placeholder="Pesquisar pelo título"
                type="search"
                />
            </Brand>
            <div>
                <div>
                    <strong>Alexandre Ribeiro</strong>
                    <ButtonText 
                    title={"sair"}
                    onClick={signOut}
                    />
                </div>
                <Link to={"/profile"}><img src="" alt="Foto do usúario" /></Link>
            </div>
        </Container>
    )
}