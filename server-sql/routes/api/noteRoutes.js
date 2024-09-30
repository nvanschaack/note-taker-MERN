const {createNote, deleteOneNote, findAllNotesFromAllUsers, findOneNote} = require('../../controllers/noteControllers');
const router = require('express').Router();

// /api/notes/:userId
router.route('/:userId').post(createNote);

// /api/notes/:noteId
router.route('/:noteId').delete(deleteOneNote).get(findOneNote);

// /api/notes
router.route('/').get(findAllNotesFromAllUsers)

module.exports = router;