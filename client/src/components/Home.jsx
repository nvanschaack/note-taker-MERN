import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NoteList from './NoteList'

import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Auth from '../utils/auth';
import { findAllNotesFromUser } from "../utils/api";

export default function Home() {
    const [userData, setUserData] = useState([])

    //when the component loads, we want to run a fetch to retrieve data (the notes the user has made)
    useEffect(() => {
        //we have to create another fxn in order to do things asyncronously 
        const getData = async () => {
            const token = Auth.retrieveTokenFromLocalStorage();
            const response = await findAllNotesFromUser(token)

            const notes = await response.json()

            setUserData(notes);
        }

        getData()
    }, [userData])

    return (
        <>
            <Navigation />
            <Container>
                <Row>
                    <Col >
                        {userData.length === 0 ? 'No notes to be displayed.' : <NoteList notes={userData} />}
                    </Col>
                    <Col >
                        <div>
                            <h1>Add notes here:</h1>
                        </div>
                        <button >
                            <a href="/Notes" role="button">Add New Note</a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </>

    )
}