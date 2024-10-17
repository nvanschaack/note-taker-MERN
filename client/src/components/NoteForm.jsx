import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { createNote } from '../utils/api';
import Auth from '../utils/auth'

export default function NoteForm() {
    //setting state to an object consisting of 2 properties: "title", and "note_text"
    const [noteInfo, setNoteInfo] = useState({
        title: '',
        note_text: ''
    });
    //when the submit button is clicked, it will run this fxn
    const handleSubmit = async (event) => {
        //prevent page refresh on submit
        event.preventDefault();
        //create a variable for the token retrieved from local storage. this is a fxn imported from auth.js
        const token = Auth.retrieveTokenFromLocalStorage();
        //await the createNote fxn to run given the params it needs. call it "response"
        const response = await createNote(token, noteInfo);
        //if the response is falsey, throw an error
        if (!response.ok) {
            throw new Error('note could not be created')
        }
        //else, go to home page
        window.location.assign('/')
    }
    //this fxn is called when the user does anything to change the input fields in the form
    const handleChange = (e) => {
        //state will be set every time something changes.
        setNoteInfo({
            //we spread the current info stored in the noteInfo object to get access to the properties.
            ...noteInfo,

            //[e.target.name] = the event is the "onChange", the target is the input field the user is in, and the name is the name of the input field-- either "title" or "note_text"
            //e.target.value = the event is the "onChange", the target is the input field the user is in, and the value is the current value it has. it changes as soon as the user changes the input field
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
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
            </Form>
        </>
    )
}
