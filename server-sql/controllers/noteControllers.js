//require connection from server using db as a variable
const db = require('../config/connection');

module.exports = {
    createNote(req, res) {
        //in order to create a note we want the user to be signed in ...
        //can we use both req.body and req.params?
        const sql = `INSERT INTO notes (title, note_text, userId) VALUES ('${req.body.title}', '${req.body.note_text}', '${req.params.userId}')`
        db.query(sql, (err, data) => {
            if (err) {
                return res.status(500).json('unable to create note')
            }
            res.json(data)
        })
    },
    deleteOneNote(req, res) {
        const sql = `DELETE notes WHERE id = '${req.params.noteId}'`
        db.query(sql, (err, data) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json('note has been deleted')
        })
    },
    findAllNotes(req, res) {
        
    }
}