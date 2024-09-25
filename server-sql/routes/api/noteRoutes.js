const {createNote, deleteOneNote} = require('../../controllers/noteControllers');
const router = require('express').Router();

// /api/notes/:noteId
router.route('/:noteId').post(createNote).delete(deleteOneNote);

module.exports = router;