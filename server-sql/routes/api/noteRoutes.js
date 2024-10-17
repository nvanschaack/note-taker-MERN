const {createNote, deleteOneNote, findAllNotesFromAllUsers, findOneNote, findNotesFromOneUser, editNote} = require('../../controllers/noteControllers');
const router = require('express').Router();
const {authMiddleware}= require('../../utils/auth');

// /api/notes
// *development purposes only*
router.route('/').get(findAllNotesFromAllUsers)

// /api/notes/getNotes
router.route('/getNotes').get(authMiddleware, findNotesFromOneUser)
// /api/notes/createNote
// we dont need params anymore, bc authMiddleware adds req.user property
router.route('/createNote').post(authMiddleware, createNote);


// /api/notes/:noteId
router.route('/:noteId').delete(authMiddleware, deleteOneNote).get(findOneNote).put(authMiddleware, editNote);

module.exports = router;