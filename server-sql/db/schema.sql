-- DEFINING Database
DROP DATABASE IF EXISTS note_taker;
CREATE DATABASE note_taker;

USE note_taker;

-- create tables
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    note_text TEXT NOT NULL,
    userId INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
);