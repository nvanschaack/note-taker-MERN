import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Card() {
  return (
    <>
        <Card style={{ width: '18rem' }} key={note.id}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>
                {note.note_text}
              </Card.Text>
              <Button onClick={() => { handleDelete(note.id) }}>Delete</Button>
              <Button onClick={handleEdit}>Edit</Button>
            </Card.Body>
          </Card>
    </>
  )
}
