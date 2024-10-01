//require connection from config folder using db as a variable
const db = require('../config/connection');
//bringing in bcrypt so that we can hash the password when we create a user, and compare passwords when logging in a user
const bcrypt = require('bcrypt');
const auth = require('../utils/auth');

module.exports = {
    async createUser(req, res) {
        const hashedPw = await bcrypt.hash(req.body.user_password, 10)

        const sql = `INSERT INTO user (username, user_password) VALUES ('${req.body.username}', '${hashedPw}')`;
        //query is a function/method that takes in a query string and a callback fxn
        //the callback fxn has err and data (or rows) as parameters
        //data represents the rows of data returned from the query
        //in an insert, there is no data to be returned, because were just inserting data into the database
        db.query(sql, (err, data) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json('user created')
        })
    },
    findAllUsers(req, res) {
        //in a select, data can be returned because we want to find data
        const sql = `SELECT * FROM user`
        db.query(sql, (err, data) => {
            if (err) {
                return res.status(500).json(err)
            }
            res.json(data)
        })
    },
    findOneUser(req, res) {
        //in a select, data can be returned because we want to find data
        //WRITE A JOIN STATEMENT TO SHOW ALL NOTES FROM ONE USER
        // console.log(req.user);
        const sql = `SELECT user.id, user.username, notes.title, notes.note_text, notes.id AS note_id FROM user LEFT JOIN notes ON user.id = notes.userId WHERE user.id = ${req.user.id}`
     
        db.query(sql, (err, data) => {
            if (err) {
                return res.status(500).json(err)
            }
            //if the length of the data array is 0, meaning there is no row with data related to a certain id, return 'user not found'
            if (data.length === 0) {
                return res.status(400).json('user not found')
            }
            //otherwise, show the data returned from the query string
            //data is an array of one object in this specific instance
            res.json(data)
        })

    },
    loginUser(req, res) {
        const sql = `SELECT * FROM user WHERE username = '${req.body.username}'`
        db.query(sql, async (err, data) => {
            if (data.length === 0) {
                return res.status(400).json('username is not in the database')
            }
            //make user a variable extracted from the data array (now it's an object)
            const user = data[0]

            const checkClientPw = await bcrypt.compare(req.body.user_password, user.user_password)

            if (!checkClientPw) {
                return res.status(400).json('password does not match password in database')
            }
            
            const token = auth.signToken(user)
            
            res.status(200).json({token})
        })
    }
}