import Card from './Card'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteOneNote, editNote } from '../utils/api';
import Auth from '../utils/auth';
import { useState } from 'react';

//deconstruct notes out of props which was passed thru home.jsx
export default function NoteList({ notes }) {
  // console.log(notes);
  const [editMode, setEditMode] = useState(false)

  const handleEdit = async (data) => {
    //this is a toggle
    //setting state to be the oppposite of whatever state was before
    setEditMode(!editMode)
    // const token = Auth.retrieveTokenFromLocalStorage()

    // const editOneNote = await editNote(token, data)
  }

  const handleDelete = async (noteId) => {
    const token = Auth.retrieveTokenFromLocalStorage()
    const deleteNote = await deleteOneNote(token, noteId)
  }

  //need to display every note that has been created from one user
  return (
    <>
      <div>Notes:</div>
      {notes.map((note, i) => (
        
          <Card 
          key={note.id}
          note={note}
          
          />

          //ELSE, display the form to edit the note.
          // <Form
          // // onSubmit={handleSubmit}
          // >
          //   <Form.Group className="mb-3">
          //     <Form.Label>Title</Form.Label>
          //     <Form.Control
          //     // required
          //     // name="title"
          //     // type="text"
          //     // placeholder='Note Title'
          //     // value={noteInfo.title}
          //     // onChange={handleChange}
          //     />
          //   </Form.Group>

          //   <InputGroup>
          //     <InputGroup.Text>Text</InputGroup.Text>
          //     <Form.Control
          //     // required
          //     // name="note_text"
          //     // placeholder='Note Text'
          //     // value={noteInfo.note_text}
          //     // onChange={handleChange}
          //     />
          //   </InputGroup>

          //   <Button variant="primary" type="submit">
          //     Submit
          //   </Button>
          //   <Button onClick={handleEdit}>Cancel</Button>
          // </Form>



      ))}

    </>

  )
}
