import { Container } from "./styles"

import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
export function Brand({title}){
    return (
        <Container>
            <Link>
                <FiArrowLeft/>
                Voltar
            </Link>
            <h1>{title}</h1>
        </Container>
    )
}