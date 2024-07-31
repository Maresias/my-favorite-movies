import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form, InputArea, Markers,  ButtonArea } from './styles'

import {Header} from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { MovieIten } from '../../components/MovieIten'
import { Brand } from '../../components/Brand'
 
export function RateMovie(){

    const [ tags, setTag ] = useState([])
    const [ newTag, setNewTag ] = useState("")


    function handleAddTag(){
        setTag( prevState => [...prevState, newTag ])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTag( prevstate => prevstate.filter( tag => tag !== deleted) )
    }
    return (
        <Container>
            <Header/>
            <main>
                <Form>

                <Brand title={"Avaliar Filme"} route={"/"}/>

                    <InputArea>

                        <Input type="text" placeholder="Titúlo" />
                        <Input type="text" placeholder="Sua Nota de (0 a 5)" />

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
                        <Button title="Excluir Filme" isDark/>
                        <Button title="Salvar Alterações"/>
                        
                    </ButtonArea>
                </Form>
            </main>
        </Container>
    )
}