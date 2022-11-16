import { Card, CardContent, CardHeader, IconButton, ButtonGroup, Typography, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import { INote } from "./NoteList"
import { useState } from "react"
import { useAppDispatch } from "../hook"
import { editNote, removeNote} from "../store/noteSlice"

export default function NoteItem({...props}: INote) {
    const dispatch = useAppDispatch()
    const [isEditable, setIsEditable] = useState(false)
    const [currentNote, setCurrentNote] = useState({...props})

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
        </CardContent>
        <ButtonGroup>
            <IconButton onClick={() => {
                dispatch(editNote(currentNote))
                setIsEditable(false)
            }}
            >
                <CheckIcon />
            </IconButton>
            <IconButton onClick={() => {
                setCurrentNote({...props})
                setIsEditable(false)
                }}>
                <ClearIcon />
            </IconButton>
        </ButtonGroup>
        </Card>
        :
        <Card variant="outlined" sx={{margin: '20px auto', padding: '20px'}}>
            <CardHeader title={props.title}/>
            <CardContent>
                <Typography>
                    {props.body}
                </Typography>
            </CardContent>
            <ButtonGroup>
                <IconButton onClick={() => setIsEditable(true)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => {if (props.id) dispatch(removeNote(props.id))}}>
                    <DeleteIcon />
                </IconButton>
            </ButtonGroup>
        </Card>)
}