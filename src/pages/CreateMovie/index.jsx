import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";



export function CreateMovie ( ){
    return(
        <Container>
            <Header/>
            <Form>
                <Brand title={"Adicionar Filme"} route={"/"}/>
                <Input type="text" placeholder="Nome do filme"/>
                <textarea placeholder="Resumo do filme"/>

                <Button
                    title={"Salvar filme"}
                />
            </Form>
        </Container>
    )
}