# note-taker: A MERN Stack Note-Taking App
## Description:
This project is a simple note-taking application built with the MERN stack (MySQL, Express.js, React, and Node.js). It allows users to create, view, edit, and delete their notes. 

## Features:
User authentication (sign in and sign up)
Secure storage of notes using bcrypt for password hashing and JWT for authentication
Ability to create new notes with title and text content
Display existing notes on the home page
Edit and delete existing notes
MySQL for database storage (MongDB backend created, but is not configured for client)

# Tech Stack:
## Frontend: Javascript, React, React Bootstrap
## Backend: Javascript, Express.js
## Authentication: bcrypt, JSON Web Token (JWT)
## Database: MySQL, MongoDB

## Getting Started:
Clone this repository: git clone https://github.com/nvanschaack/note-taker-MERN 

## Install dependencies:
Navigate to the project directory: cd note-taker
Install dependencies: npm install

## Configure the database:
-in the server-sql folder, there is a config folder. naviagte to the connection.js file and include your personal connection.

## Run the development server:
Start the backend server: npm start
Start the frontend server: npm run dev

## Using the Application:
- Open http://localhost:3000 in your browser.
- Sign in or create an account.
- Once logged in, you will be taken to the home page where your existing notes are displayed.
- Click "Add New Note" to add a new note.
- Enter a title and content for your note and submit the form.
- You will be redirected to the home page where your new note will be displayed with your existing notes.
- Use the edit and delete buttons on each note to manage your notes.

## Contributing:
We welcome pull requests! Feel free to open a pull request if you want to contribute to this project.

## License:
This project is licensed under the MIT License.  See the LICENSE file for details.   
