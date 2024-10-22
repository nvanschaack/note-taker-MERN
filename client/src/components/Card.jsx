import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Auth from '../utils/auth';
import { editNote } from '../utils/api';

export default function NoteCard({
    notes,
    note,
    handleEdit,
    handleDelete,
    checkIfCardAndNoteIdMatch,
    setEditingCardID,
    editingCardID,
    fetchData
}) {

    const [noteInfo, setNoteInfo] = useState({
        id: 0,
        title: '',
        note_text: ''
    });

    useEffect(() => {
        if (editingCardID) {
            const filteredNote = notes.find((note) => note.id === editingCardID)
            if (filteredNote) {
                setNoteInfo({
                    noteId: filteredNote.id,
                    title: filteredNote.title,
                    note_text: filteredNote.note_text
                })
            }
        }
    }, [notes, editingCardID])

    const handleChange = (event) => {
        //deconstructing name and value out of the event.target
        const {name, value} = event.target
        setNoteInfo((prevState)=> ({
            ...prevState,
            [name]:value
        }))

    }

    const handleCancel = async () => {
        setEditingCardID(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = Auth.retrieveTokenFromLocalStorage()
        await editNote(token, noteInfo)
        setEditingCardID(null)
        fetchData()
    }

    return (

        <Card style={{ width: '18rem' }} >
            {!checkIfCardAndNoteIdMatch ?
                (<Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.note_text}
                    </Card.Text>
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handleEdit}>Edit</Button>
                </Card.Body>)
                :
                (
                    <Form
                    onSubmit={handleSubmit}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                name="title"
                                type="text"
                                placeholder='Note Title'
                                value={noteInfo.title}
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <InputGroup>
                            <InputGroup.Text>Text</InputGroup.Text>
                            <Form.Control
                            required
                            name="note_text"
                            placeholder='Note Text'
                            value={noteInfo.note_text}
                            onChange={handleChange}
                            />
                        </InputGroup>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button
                            onClick={handleCancel}
                        >Cancel</Button>
                    </Form>
                )
            }


        </Card>

    )
}
