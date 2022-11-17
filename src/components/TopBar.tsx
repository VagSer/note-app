import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function TopBar(props: any) {
    return (
    <AppBar position='fixed' sx={{display: 'flex', flexDirection: 'row', backgroundColor: 'darkgreen'}}>
        <Typography variant="h4" sx={{p: '9px'}}>
            NoteApp
        </Typography>
        <Toolbar>
            <Button variant="contained" onClick={() => props.setVisible(true)}>
                Добавить заметку
            </Button>
        </Toolbar>
    </AppBar>)
}