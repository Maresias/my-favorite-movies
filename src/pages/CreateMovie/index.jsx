import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";



export function CreateMovie ( ){
    return(
        <Container>
            <Header/>
            <Form>
                <Input type="text" placeholder="Nome do filme"/>
                <textarea/>

                <Button
                    title={"Salvar filme"}
                />
            </Form>
        </Container>
    )
}