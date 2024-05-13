import { Container } from './styles'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

export function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquisar pelo título"
            type="search"
            />
            <div>
                <img src="https://github.com/Maresias.png" alt="Foto do usúario" />
                <div>
                    <strong>Alexandre Ribeiro</strong>
                    <ButtonText title={"sair"}/>
                </div>
            </div>
        </Container>
    )
}