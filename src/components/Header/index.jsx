import { Container, Brand } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

export function Header(){
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
                    <ButtonText title={"sair"}/>
                </div>
                <Link to={"/profile"}><img src="https://github.com/Maresias.png" alt="Foto do usúario" /></Link>
            </div>
        </Container>
    )
}