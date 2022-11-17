import { Button } from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import ModalWindow from "./components/ModalWIndow"
import NewNote from "./components/NewNote"
import NoteList from "./components/NoteList"
import Tag from "./components/Tag"
import { useAppSelector } from "./hook"


export default function App() {
  const notes = useAppSelector(state => state.notes.notesAll)
  const [visible, setVisible] = useState(false)

  return (
    <Container sx={{width: 'min(90%, 800px)'}}>
      <h1>Моё приложение для заметок</h1>
      <Button onClick = {() => setVisible(true)}>
        Добавить заметку
      </Button>
      <NoteList notes = {notes}/>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <NewNote setVisible={setVisible}/>
      </ModalWindow>
    </Container>
  )
}
