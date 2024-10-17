//API functionality:
//getUser
//createNote
//deleteNote
//findOneNote
//findAllNotes

//comparing the information passed in to the info in the backend, if it matches --> creates a token
export const loginUser = (data) => {
    return fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};
//making a new user and sending that data to the back end
export const createUser = (data) => {
    return fetch('/api/user', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};
//
export const findAllNotesFromUser = (token) => {
    return fetch('/api/notes/getNotes', {
        headers: {
            'content-type': 'application/json',
            //whenever we need authentication, we are providing authorization so that we can send the token back to server
            authorization: token
        },
    })
};
//push note into database. since it's a post method, it needs a body.
export const createNote = (token, data) => {
    return fetch('/api/notes/createNote', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            //whenever we need authentication, we are providing authorization so that we can send the token back to server
            authorization: token
        },
        //this body is used in the noteControllers. req.body.title & req.body.note_text are now properties that the backend can use
        body: JSON.stringify(data)
    })
};
export const deleteOneNote = (token, noteId) => {
    return fetch(`/api/notes/${noteId}`,{
        method: 'DELETE',
        headers: {
            authorization: token
        }
    })
};
export const editNote = (token, data) => {
    return fetch(`/api/notes/${data.noteId}`, {
        method: 'PUT',
        headers: {
            authorization: token,
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
};

