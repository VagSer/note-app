import { Container } from "@mui/system"
import NewNote from "./components/NewNote"
import NoteList from "./components/NoteList"
import Tag from "./components/Tag"
import { useAppSelector } from "./hook"


export default function App() {
  const notes = useAppSelector(state => state.notes.notesAll)

  return (
    <Container sx={{width: 'min(90%, 800px)'}}>
      <h1>Моё приложение для заметок</h1>
      <NewNote />
      <NoteList notes = {notes}/>
    </Container>
  )
}
