import { Button, Card, CardContent, CardHeader, IconButton, ButtonGroup, Typography, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add';
import { INote } from "./NoteList"
import { useState } from "react"
import { useAppDispatch } from "../hook"
import { editNote, removeNote} from "../store/noteSlice"

export default function NoteItem({...props}: INote) {
    const dispatch = useAppDispatch()
    const [isEditable, setIsEditable] = useState(false)
    const [currentNote, setCurrentNote] = useState({...props})
    const [newTag, setNewTag] = useState('')

    return (
        isEditable? 
        <Card variant="outlined" sx={{margin: '20px auto', padding: '20px'}}>
        <CardContent>
            <TextField 
                value={currentNote.title}
                onChange={(event) => setCurrentNote({...currentNote, title: event.target.value})}
            />
            <TextField 
                value={currentNote.body}
                fullWidth
                multiline={true}
                onChange={(event) => setCurrentNote({...currentNote, body: event.target.value})}
            />
            <section>
                {currentNote.tags?.map(tag => 
                <Button 
                    variant="contained"
                    sx={{m:'2px'}}
                    key={tag}
                    onClick={() => setCurrentNote({...currentNote, tags: currentNote.tags?.filter(t => t !== tag)})}
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
        </CardContent>
        <ButtonGroup>
            <Button 
                color='success'
                endIcon={<CheckIcon />}
                onClick={() => {
                    dispatch(editNote(currentNote))
                    setIsEditable(false)
                }}
            >
                Принять  
            </Button>
            <Button
                endIcon={<AddIcon />}
                onClick={() => {if(newTag) {
                    let noteTags = currentNote.tags?.length? [...currentNote.tags, newTag.toLowerCase()] : [newTag.toLowerCase()]
                    noteTags = [...new Set(noteTags)]
                    setCurrentNote({...currentNote, tags: [...noteTags]})
                    setNewTag('')
                    }
                }}
            >
                Добавить тег
            </Button>
            <Button 
                color='error'
                endIcon={<ClearIcon />}
                onClick={() => {
                    setCurrentNote({...props})
                    setIsEditable(false)
                }}
            >
                Отменить
            </Button>
        </ButtonGroup>
        </Card>
        :
        <Card variant="outlined" sx={{margin: '20px auto', padding: '20px'}}>
            <CardHeader title={props.title}/>
            <CardContent>
                <Typography>
                    {props.body}
                </Typography>
                <section>
                    {props.tags?.map(tag => 
                    <Button 
                        variant="contained"
                        sx={{m:'2px'}}
                        key={tag}
                    >
                        {tag}
                    </Button>)}
                </section>
            </CardContent>
            <ButtonGroup>
                <Button 
                    endIcon={<EditIcon />}
                    onClick={() => setIsEditable(true)}>
                    Редактировать
                </Button>
                <Button 
                    color='error'
                    endIcon={<DeleteIcon />}
                    onClick={() => {if (props.id) dispatch(removeNote(props.id))}}>
                    Удалить
                </Button>
            </ButtonGroup>
        </Card>)
}