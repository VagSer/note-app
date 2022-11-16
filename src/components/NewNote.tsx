import { ButtonGroup, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../hook";
import { addNote } from "../store/noteSlice";

export default function NewNote() {
    const [newNote, setNewNote] = useState({
        id: null, title: '', body: '', tags: []
    })

    const dispatch=useAppDispatch()

    return (<Card sx={{padding: '20px'}}>
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
        <ButtonGroup>
            <Button
                color="success"
                onClick={() => {dispatch(addNote(newNote))
                    setNewNote({id: null, title: '', body: '', tags: []})
                }}
            >
                Создать
            </Button>
            <Button
                color="error"
            >
                Очистить
            </Button>
        </ButtonGroup>
    </Card>)
}