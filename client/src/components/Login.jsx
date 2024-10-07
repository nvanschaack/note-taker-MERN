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
        //this await will only return userData in the form of technical fetch data (doesn't have the actual info you need) --> the .json() method is extracts the actual content needed
        const userData = await loginUser(formData)
        console.log("user data", userData);
        
        if (!userData.ok) {
            throw new Error('data not sufficient')
        }
        //console.log the token
        //here we use the json() method to extract the token, from the loginUser fxn
        const token = await userData.json()
        console.log('received token:', token);
        //set item in localstorage, so we can access the token later on
        localStorage.setItem('token', token.token)
        //bring to the home page:
        window.location.assign('/')
        
    } catch (error) {
        console.log(error);
    }
}
// console.log(formData);

    return (
        <>
        <button onClick={()=>window.location.assign('/SignUp')}>Sign Up</button>
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
        </>
        
    )
}
