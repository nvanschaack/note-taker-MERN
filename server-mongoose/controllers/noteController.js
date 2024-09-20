//controllers control the flow of ddata into and from the database
const { Note, User } = require('../models')

//exporting an object of methods
module.exports = {

    // create a note
    async createNote(req, res) {
        try {

            const note = await Note.create(req.body);

            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { notes: note._id } },
                { new: true }
            )
            res.json(user)

        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    },
    // find a note
    async findOneNote(req, res) {
        try {

            const note = await Note.findOne({ _id: req.params.noteId })
            if (!note) {
                return res.status(400).json('Note does note exist')
            }

            res.status(200).json(note)

        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    },
    // delete a note
    async deleteNote(req, res) {
        try {

            const note = await Note.findOneAndDelete({ _id: req.params.noteId })
            if (!note) {
               return res.status(400).json('note does not exist')
            }

            const updatedUser = await User.findOneAndUpdate(
                { notes: req.params.noteId },
                { $pull: { notes: req.params.noteId } },
                { new: true }
            )

            res.status(200).json(updatedUser)

        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    }

}

