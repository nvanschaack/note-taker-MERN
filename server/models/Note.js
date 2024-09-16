const { Schema, model } = require('mongoose');

function formatDate(date){
    const newDate = date.toLocaleDateString()
    return newDate
}

const noteSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: formatDate(Date.now)
        }
    }
)

const Note = model('Note', noteSchema);

module.exports = Note;