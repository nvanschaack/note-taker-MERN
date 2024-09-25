const mysql = require('mysql2');

//db is a variable that represents a connection to mysql instance on my local computer
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'note_taker'
});

module.exports = db;