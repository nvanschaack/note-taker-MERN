//controllers control the flow of data into and from the database
const { User } = require('../models')

module.exports = {
    //create a user 
    async createUser(req, res) {
        try {
            const user = await User.create(req.body)
            //sending response from server to client- this confirms that something was done and can return back to the client
            res.json(user)
        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    },
    //login a user
    async loginUser(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) {
                return res.status(400).json('user does not exist')
            }

            const password = await user.isCorrectPassword(req.body.password)

            if (!password) {
                return res.status(400).json('password doesnt match')
            }

            res.status(200).json(user)

        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    },
    //find a user
    async findOneUser(req, res) {
        try {

            const user = await User.findOne({ _id: req.params.userId })
            if (!user) {
                return res.status(400).json('user ID does not exist')
            }

            res.status(200).json(user)

        } catch (error) {
            console.error({ message: error })
            return res.status(500).json(error)
        }
    }
}
