const {createUser} = require('../../controllers/userController');
const router = require('express').Router();

// /api/users
router.route('/').post(createUser);

module.exports = router;