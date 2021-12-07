
import React from 'react';
import notes from '../assets/data';

const NotesPage = () => {
    return (
        <div>
            {notes.map(note => (
                <p> {note.body} </p>
            )
            )}
        </div>
    )
}

export default NotesPage
