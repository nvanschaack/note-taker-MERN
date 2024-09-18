//controllers control the flow of data into and from the database
const { User } = require('../models')

module.exports = {
    //create a user 
    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            //sending response from server to client
            res.json(user)
        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    }
    //login a user
    //find a user

}

