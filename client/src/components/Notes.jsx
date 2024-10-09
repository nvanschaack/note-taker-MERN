import React from 'react'
import NoteForm from './NoteForm'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Notes() {
  return (
    <>
      <Container>
        <Row>
          <Col >
            <NoteForm />
          </Col>
        </Row>
      </Container>
    </>    
  )
}
