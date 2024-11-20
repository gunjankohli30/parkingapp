const express = require('express');
const {SignUp} = require('../controllers/userController');

const router = express.Router();

// Route to create a new user
router.post('/signup', SignUp);

module.exports = router;