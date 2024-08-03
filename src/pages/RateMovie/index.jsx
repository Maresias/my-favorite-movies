import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { Container, Form, InputArea, Markers,  ButtonArea, MovieArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieIten } from '../../components/MovieIten'
import { Brand } from '../../components/Brand'
 
export function RateMovie(){
    const [dados, setDados ] = useState("")
    const [ title, setTitle ] = useState("")
    const [ nota, setNota ] = useState("")
    const [id, setId ] = useState()
    const [ tags, setTag ] = useState([])
    const [ newTag, setNewTag ] = useState("")
    const [description, setDescription ] = useState("")


    function handleAddTag(){
        setTag( prevState => [...prevState, newTag ])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTag( prevstate => prevstate.filter( tag => tag !== deleted) )
    }

    async function handleAddNote(){
        
        try{
            await api.post("/notes", {
                rating:nota,
                tags,
                movie_id:id
            })

            alert("Filme avaliado com sucesso")
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível avaliar")
            }
        }
    }

    function handleSelected() {
        setDados(title)
    }

    useEffect(() => {
        async function searchMovie(){
            const response = await api.get(`/movie?title=${dados}`)

            const {id, title, description } = response.data
            setTitle(title)
            setId(id)
            setDescription(description)
        
        }

        if(dados){
            searchMovie()
        }else{
            setDescription("")
            setTitle("")
        }

    }, [dados])

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
                            onChange={ e => setDados( e.target.value )} 
                            value={dados}
                        />

                        <Input 
                            type="text" 
                            placeholder="Sua Nota de (0 a 5)"
                            onChange={ e => setNota( e.target.value )} 
                        />


                    </InputArea>

                    <MovieArea
                        onClick={handleSelected}
                    >
                    <h4>{title}</h4>
                    <p>{description}</p>
                    </MovieArea>

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