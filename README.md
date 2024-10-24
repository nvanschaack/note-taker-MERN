# note-taker: A MERN Stack Note-Taking App
## Description:
This project is a simple note-taking application built with the MERN stack (MongoDB or MySQL, Express.js, React, and Node.js). It allows users to create, view, edit, and delete their notes.

## Features:
User authentication (sign in and sign up)
Secure storage of notes using bcrypt for password hashing and JWT for authentication
Ability to create new notes with title and text content
Display existing notes on the home page
Edit and delete existing notes
Option to use either MongoDB or MySQL for database storage (choose one during setup)
Tech Stack:

## Frontend: Javascript, React, React Bootstrap
## Backend: Javascript, Express.js
## Authentication: bcrypt, JSON Web Token (JWT)
## Database (choose one): MongoDB, MySQL

## Getting Started:
Clone this repository: git clone https://github.com/nvanschaack/note-taker-MERN 

## Install dependencies:
Navigate to the project directory: cd note-taker
Install dependencies: npm install (or yarn install)

## Configure the database:
Create a .env file in the project root directory.
Add the following environment variables to the .env file (replace with your own connection details):
MONGODB_URI (if using MongoDB): Your MongoDB connection string
MYSQL_HOST (if using MySQL): Your MySQL host address
MYSQL_USERNAME (if using MySQL): Your MySQL username
MYSQL_PASSWORD (if using MySQL): Your MySQL password
MYSQL_DATABASE (if using MySQL): Your MySQL database name

## Choose your database:
Comment out the unused database configuration in backend/db.js (e.g., comment out MongoDB if using MySQL)

## Run the development server:
Start the backend server: npm run backend:dev (or yarn backend:dev)
Start the frontend server: npm run frontend:dev (or yarn frontend:dev)

## Using the Application:
- Open http://localhost:3001 in your browser.
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
