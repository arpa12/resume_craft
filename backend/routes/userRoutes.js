const express = require('express');
const { check } = require('express-validator');
const { signup, login, getProfile } = require('../controllers/userController');
const auth = require('../middleware/auth'); // Adjust the path if necessary
const router = express.Router();

router.post(
    '/signup',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
    ],
    signup
);

router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    login
);

// Protect the profile route
router.get('/profile', auth, getProfile); // Add this line to handle profile requests

module.exports = router;
