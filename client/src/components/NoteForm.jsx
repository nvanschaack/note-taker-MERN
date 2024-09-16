import React from 'react'
import { useState } from 'react';

export default function NoteForm() {
const [noteTitle, setNoteTitle] = useState('');
const [noteText, setNoteText] = useState('');

function handleSubmit(event){
    event.preventDefault()
    console.log(noteTitle, noteText);
}

    return (
        <>
            <h1>
                New Note Form
            </h1>
            <form id='form'>
                <input type="text" placeholder='Note Title' id='form-title' value={noteTitle} onChange={(e)=> setNoteTitle(e.target.value)}/>
                <textarea placeholder='Note Text' id='form-text' value={noteText} onChange={(e)=> setNoteText(e.target.value)}></textarea>
                <input type="submit" value='Submit Form' onClick={handleSubmit}/>
            </form>

        </>
    )
}
