import { Container } from './styles'

import { Input } from '../Input'

export function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título"
            type="search"
            />
            <div>
                <h2>Foto</h2>
                <strong>Alexandre Ribeiro</strong>
                <span>Sair</span>
            </div>
        </Container>
    )
}