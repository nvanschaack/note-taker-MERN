import NoteCard from './Card'
import { deleteOneNote, editNote } from '../utils/api';
import Auth from '../utils/auth';
import { useState } from 'react';

//deconstruct notes out of props which was passed thru home.jsx
export default function NoteList({ notes, fetchData }) {
  // console.log(notes);
  const [editingCardID, setEditingCardID] = useState(null)
  // console.log(editingCardID);
  
  const handleEdit = async (id) => {
   //setting the id of the note to be the id of the card that i'm editing
    setEditingCardID(id)
  }

  const handleDelete = async (noteId) => {
    const token = Auth.retrieveTokenFromLocalStorage()
    await deleteOneNote(token, noteId)
    fetchData()
  }

  //need to display every note that has been created from one user
  return (
    <>
      <div>Notes:</div>
      {notes.map((note, i) => (
        
          <NoteCard 
          key={note.id}
          note={note}
          notes={notes}
          editingCardID={editingCardID}
          handleEdit={()=> handleEdit(note.id)}
          handleDelete={()=> handleDelete(note.id)}
          //sending an expression/comparison (usually is inside of a condition, like an if statement) over to Card.jsx, IT WILL SEND A T/F VALUE TO THE CARD
          checkIfCardAndNoteIdMatch={note.id === editingCardID}
          // handleCancel={handleCancel}
          // handleSubmit={()=> handleSubmit(data)}
          setEditingCardID={setEditingCardID}
          fetchData={fetchData}
          />

      ))}

    </>

  )
}
