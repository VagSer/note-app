import { ButtonGroup, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../hook";
import { addNote } from "../store/noteSlice";

export default function NewNote({setVisible}: any) {
    const [newNote, setNewNote] = useState({
        id: null, title: '', body: '', tags: [] as string[]
    })

    const [newTag, setNewTag] = useState('')

    const dispatch=useAppDispatch()

    return (
    <form onSubmit = {event => event.preventDefault()}>
        <TextField 
            label="Название заметки"
            value={newNote.title}
            onChange={event => setNewNote({...newNote, title: event.target.value})}
        />
        <TextField 
            label="Текст заметки"
            multiline={true}
            minRows={3}
            fullWidth
            sx={{m: '10px 0'}}
            value={newNote.body}
            onChange={event => setNewNote({...newNote, body: event.target.value})}
        />
        <section>
            {newNote.tags?.map(tag => 
            <Button 
                variant="contained"
                sx={{m:'2px', borderRadius: '20px'}}
                key={tag}
                onClick={() => setNewNote({...newNote, tags: newNote.tags.filter(t => t !== tag)})}
            >
                {tag}
            </Button>)}
        </section>
        <TextField 
            label="Тег"
            sx={{mt: '10px'}}
            value={newTag}
            onChange={event => setNewTag(event.target.value)}
        />
        <hr/>
        <ButtonGroup sx={{display: 'flex', justifyContent: 'center', mt: '15px'}}>
            <Button
                color="success"
                onClick={() => {dispatch(addNote(newNote))
                    setNewNote({id: null, title: '', body: '', tags: []})
                    setVisible(false)
                }}
            >
                Создать
            </Button>
            <Button
                onClick={() => {if(newTag) {
                    let noteTags = newNote.tags?.length? [...newNote.tags, newTag.toLowerCase()] : [newTag.toLowerCase()]
                    noteTags = [...new Set(noteTags)]
                    setNewNote({...newNote, tags: [...noteTags]})
                    setNewTag('')
                    }
                }}
            >
                Добавить тег
            </Button>
            <Button
                color="error"
                onClick={() => setNewNote({id: null, title: '', body: '', tags: []})}
            >
                Очистить
            </Button>
        </ButtonGroup>
    </form>)
}