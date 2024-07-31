import { Container } from "./styles"

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
export function Brand({title, route}){
    return (
        <Container>
            <Link to={route}>
                <FiArrowLeft/>
                Voltar
            </Link>
            <h1>{title}</h1>
        </Container>
    )
}