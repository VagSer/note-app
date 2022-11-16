import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Note = {
    id: number | null
    title: string
    body: string
    tags?: string[]
}

type NoteState = {
    notesAll: Note[]
}

const initialState: NoteState = {
    notesAll: [
        {id: 1, title: "Первая заметка", body: "Это текст моей первой заметки"},
        {id: 2, title: "Вторая заметка", body: "А вот тут вторая заметка"},
    ]
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<Note>) {
            if (action.payload.title && action.payload.body){
                const newNote = {...action.payload}
                newNote.id = Date.now()
                state.notesAll.push(newNote)
            }
        },
        editNote(state, action: PayloadAction<Note>) {
            if (action.payload.title && action.payload.body){
                const newNote = {...action.payload}
                state.notesAll = state.notesAll.map(note => note.id === newNote.id? newNote: note)
            }
        },
        removeNote(state, action: PayloadAction<number>) {
            state.notesAll = state.notesAll.filter(s => s.id !== action.payload)
        }
    }
})

export const {addNote, editNote, removeNote} = noteSlice.actions
export default noteSlice.reducer