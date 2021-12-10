import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

import notes from '../assets/data'

function NotePage({ match }) {
    let noteId = match.params.id
    let note = notes.find(note => note.id == noteId)

    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to="/">
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>

            <textarea value={note?.body}></textarea>

        </div>
    )
}

export default NotePage
