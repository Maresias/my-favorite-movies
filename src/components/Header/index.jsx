import { Container, Brand } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import { api } from '../../services/api'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import {useAuth} from "../../hooks/auth"

export function Header(){

    const { user, signOut } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder
    return (
        <Container>
            <Brand>
                <h1>My favorites movies</h1>
                <Input placeholder="Pesquisar pelo título"
                type="search"
                />
            </Brand>
            <div>
                <div>
                    <strong>{user.name}</strong>
                    <ButtonText 
                    title={"sair"}
                    onClick={signOut}
                    />
                </div>
                <Link to={"/profile"}><img src={avatarUrl} alt={user.name} /></Link>
            </div>
        </Container>
    )
}