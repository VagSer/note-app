import NoteItem from "./NoteItem"

interface NoteListProps {
    notes: INote[]
}

export default function NoteList({notes}: NoteListProps) {
    return(
        <div>
            {notes.map(note => 
            <NoteItem 
                key={note.id}
                id = {note.id}
                title = {note.title}
                body = {note.body}
                tags = {note.tags}/>
            )}
        </div>
    )
}

export interface INote {
    id: number | null,
    title: string,
    body: string,
    tags?: string[]
}