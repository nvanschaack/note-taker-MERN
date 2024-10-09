import { useEffect } from 'react'
import Card from 'react-bootstrap/Card';

import { findAllNotesFromUser } from '../utils/api'

export default function NoteList() {
  //need to display every note that has been created from one user
  useEffect(() => {

  }, [])

  return (
    <>
      <div>Notes:</div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>

  )
}
