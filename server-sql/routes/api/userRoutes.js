const {createUser, findAllUsers, findOneUser, loginUser} = require('../../controllers/userControllers');
const router = require('express').Router();
const {authMiddleware}= require('../../utils/auth')

// /api/user
router.route('/').post(createUser).get(findAllUsers);

// /api/user/findOneUser
// we don't need to pass a parameter anuymore, bc we have access to req.user after running the authMiddleware fxn
router.route('/findOneUser').get(authMiddleware,findOneUser);

// /api/user/login
router.route('/login').post(loginUser)

module.exports = router;