const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// User Signup
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    
    try {
        const [results] = await db.promise().query(query, [name, email, hashedPassword]);
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'User creation failed.' });
    }
};

// User Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    
    try {
        const [results] = await db.promise().query(query, [email]);
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Create a token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful!', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed.' });
    }
};

// Fetch User Profile
exports.getProfile = async (req, res) => {
    const userId = req.user.id; // Extract user id from req.user

    const query = 'SELECT id, name, email FROM users WHERE id = ?';
    
    try {
        const [results] = await db.promise().query(query, [userId]);
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json(results[0]); // Return user data
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
