import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Brand } from "../../components/Brand";


import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function CreateMovie ( ){

    const [ title, setTitle ] = useState()
    const [ description, setDescription ] = useState()

    const navigate = useNavigate()

    async function handleAddMovie(){

        
        await api.post("/movie", {
            title,
            description
        }).then(()=>{
            alert("filme cadastrado com sucesso!!!")

            navigate("/")
            
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastra")
            }
        })

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
                        onClick={handleAddMovie}
                    />
                </div>
            </Form>
        </Container>
    )
}