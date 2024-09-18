const {createUser, loginUser, findOneUser} = require('../../controllers/userController');
const router = require('express').Router();

// /api/users
router.route('/').post(createUser);

// /api/users/login
router.route('/login').post(loginUser);

// /api/users/:userId
router.route('/:userId').get(findOneUser);

module.exports = router;