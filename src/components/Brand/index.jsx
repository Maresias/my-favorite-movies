import { Container } from "../Header/styles";

import { FiArrowDownLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
export function Brand(){
    return (
        <Container>
            <Link>
                <FiArrowDownLeft/>
                <h1>Voltar</h1>
            </Link>
        </Container>
    )
}