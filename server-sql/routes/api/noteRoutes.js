const {createNote, deleteOneNote, findAllNotesFromAllUsers, findOneNote} = require('../../controllers/noteControllers');
const router = require('express').Router();
const {authMiddleware}= require('../../utils/auth');

// /api/notes/createNote
// we dont need params anymore, bc authMiddleware adds req.user property
router.route('/createNote').post(authMiddleware, createNote);

// /api/notes/:noteId
router.route('/:noteId').delete(authMiddleware, deleteOneNote).get(findOneNote);

// /api/notes
router.route('/').get(findAllNotesFromAllUsers)

module.exports = router;