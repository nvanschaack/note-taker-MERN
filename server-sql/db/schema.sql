-- DEFINING TABLES
DROP DATABASE IF EXISTS note_taker;
CREATE DATABASE note_taker;

USE note_taker;

-- create tables
CREATE TABLE user (
    userId INT NOT NULL
    username VARCHAR(255) UNIQUE NOT NULL
    user_password VARCHAR(255) NOT NULL
    PRIMARY KEY(userId)
);

CREATE TABLE notes (
    noteId INT NOT NULL
    title VARCHAR(255) NOT NULL
    note_text TEXT NOT NULL
    userId INT NOT NULL
    PRIMARY KEY(noteId)
    FOREIGN KEY (userId) REFERENCES user(userId) ON DELETE CASCADE
);