import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";


import { useState } from "react";


export function CreateMovie ( ){

    const [ title, setTitle ] = useState()
    const [ description, setDescription ] = useState()

    async function handleAddMovie(){
        
    }
    return(
        <Container>
            <Header/>
            <Form>
                <Brand title={"Adicionar Filme"} route={"/"}/>
                <Input 
                    type="text" 
                    placeholder="Nome do filme"
                    onChange={ e => setTitle( e.target.value )}
                />
                <textarea 
                    placeholder="Resumo do filme"
                    onChange={ e => setDescription( e.target.value )}
                />

                <div>
                    <Button
                        title={"Salvar filme"}
                    />
                </div>
            </Form>
        </Container>
    )
}