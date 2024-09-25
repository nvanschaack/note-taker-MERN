const {createUser, findAllUsers, findOneUser, loginUser} = require('../../controllers/userControllers');
const router = require('express').Router();

// /api/user
router.route('/').post(createUser).get(findAllUsers);

// /api/user/:userId
router.route('/:userId').get(findOneUser);

// /api/user/login
router.route('/login').post(loginUser)

module.exports = router;