const {createNote, findOneNote, deleteNote} = require('../../controllers/noteController');
const router= require('express').Router();

// /api/notes
router.route('/').post(createNote)

// /api/notes/:noteId
router.route('/:noteId').get(findOneNote).delete(deleteNote)


module.exports = router;