import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginUser } from '../utils/api';

export default function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

const handleChange = (event) => {
    setFormData({
        //taking all the existing content from the formData object and allowing setFormData to get access to the content
        ...formData,
        //[event.target.name] in brackets bc bracket notation allows us to add or modify an existing property of an object
        //setting the [event.target.name] (which is either username or password) to the value of the event target (which is FormControl). The value changes due to the onCHange fxn that's running
        [event.target.name]:event.target.value
    })
};

const handleSubmit = async (event) => {
    event.preventDefault();
    //bring in loginUser from api.js and get it to console.log the token
    try {
        const userData = await loginUser(formData)
        if (!userData.ok) {
            throw new Error('data not sufficient')
        }
        //console.log the token
        const token = await userData.json()
        console.log('received token:', token);
        
    } catch (error) {
        console.log(error);
    }
}
// console.log(formData);

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter username" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
}
