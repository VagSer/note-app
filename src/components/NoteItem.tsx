import { Card, CardContent, CardHeader, IconButton, ButtonGroup, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import { INote } from "./NoteList"
import { useState } from "react"

export default function NoteItem({...props}: INote) {
    const [isEditable, setIsEditable] = useState(false)

    return (
        !isEditable? 
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
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ButtonGroup>
        </Card> 
        :
        <Card variant="outlined" sx={{margin: '20px auto', padding: '20px'}}>
        <CardHeader title={props.title}/>
        <CardContent>
            <Typography>
                Редактируем
            </Typography>
        </CardContent>
        <ButtonGroup>
            <IconButton>
                <CheckIcon />
            </IconButton>
            <IconButton onClick={() => setIsEditable(false)}>
                <ClearIcon />
            </IconButton>
        </ButtonGroup>
    </Card>)
}