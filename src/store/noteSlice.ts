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
            const newTodo = {...action.payload}
            newTodo.id = Date.now()
            console.log(newTodo)
            state.notesAll.push(newTodo)
        },
        removeNote(state, action: PayloadAction<number>) {
            state.notesAll = state.notesAll.filter(s => s.id !== action.payload)
        }
    }
})

export const {addNote} = noteSlice.actions
export default noteSlice.reducer