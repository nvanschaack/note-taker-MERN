  //API functionality:
    //getUser
    //createNote
    //deleteNote
    //findOneNote

    export const loginUser = (data) => {
        return fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    };

    export const createUser = (data) => {
        return fetch('/api/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    };