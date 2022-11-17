import { Button } from "@mui/material"
import { Container } from "@mui/system"
import { useState } from "react"
import ModalWindow from "./components/ModalWIndow"
import NewNote from "./components/NewNote"
import NoteList from "./components/NoteList"
import TopBar from "./components/TopBar"
import { useAppSelector } from "./hook"


export default function App() {
  const notes = useAppSelector(state => state.notes.notesAll)
  const [visible, setVisible] = useState(false)

  return (<>
    <TopBar setVisible={setVisible}/>
    <Container sx={{width: 'min(90%, 800px)', marginTop: '5rem'}}>
      <NoteList notes = {notes}/>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <NewNote setVisible={setVisible}/>
      </ModalWindow>
    </Container>
    </>
  )
}
