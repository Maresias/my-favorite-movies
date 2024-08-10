import { Container, Brand } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../Input'
import { ButtonText } from '../ButtonText'

import { api } from '../../services/api'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import {useAuth} from "../../hooks/auth"
import { useNavigate } from 'react-router-dom'

export function Header(){

    const { user, signOut } = useAuth()
    
    const navigate = useNavigate()

    function handleSignOut(){
        navigate("/")
        signOut()
    }

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
                    onClick={handleSignOut}
                    />
                </div>
                <Link to={"/profile"}><img src={avatarUrl} alt={user.name} /></Link>
            </div>
        </Container>
    )
}