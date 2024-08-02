import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Container, Form, InputArea, Markers,  ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieIten } from '../../components/MovieIten'
import { Brand } from '../../components/Brand'
 
export function RateMovie(){

    const [ title, setTitle ] = useState("Piratas do Caribe")
    const [ nota, setNota ] = useState("")
    const [ tags, setTag ] = useState([])
    const [ newTag, setNewTag ] = useState("")


    function handleAddTag(){
        setTag( prevState => [...prevState, newTag ])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTag( prevstate => prevstate.filter( tag => tag !== deleted) )
    }

    async function handleAddNote(){
        const response = await api.get(`/movie?title=${title}`)
        console.log(response)
    }

    return (
        <Container>
            <Header/>
            <main>
                <Form>

                <Brand title={"Avaliar Filme"} route={"/"}/>

                    <InputArea>

                        <Input 
                            type="search" 
                            placeholder="Titúlo"
                            onChange={ e => setTitle( e.target.value )} 
                        />

                        <Input 
                            type="text" 
                            placeholder="Sua Nota de (0 a 5)"
                            onChange={ e => setNota( e.target.value )} 
                        />

                    </InputArea>

                    <Markers>
                        <h3>Marcadores</h3>
                       <div>

                           <MovieIten 
                               isNew
                               placeholder="Novo Marcador"
                               onChange={ e => setNewTag( e.target.value)}
                               onClick={handleAddTag}
                               value={newTag}
                           />
                            {
                                tags.map((tag, index) => (
                                    <MovieIten
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                       </div>
                    </Markers>

                    <ButtonArea>
                        <Button title="Excluir Nota" isDark/>
                        <Button 
                            title="Salvar Nota"
                            onClick={handleAddNote}
                        />
                        
                    </ButtonArea>
                </Form>
            </main>
        </Container>
    )
}