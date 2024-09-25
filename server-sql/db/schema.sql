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

-- INSERT INTO user (username, user_password) VALUES ('nell', 'nell123'), ('vinnie', 'vinnie123');
-- INSERT INTO notes (title, note_text, userId) VALUES ("nell's first note", "hello world", 1), ("vinnie note", "I'm going to guatemala", 2), ("study sql", "look up w3 schools", 1), ("make dinner", "spaghetti", 2);

-- SELECT * FROM user;

-- SELECT notes.id, notes.title, notes.note_text, user.username
-- FROM notes
-- INNER JOIN user
-- ON notes.userId = user.id
-- WHERE user.id = 1;