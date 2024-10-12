const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Access denied.' });
    }

    try {
        const tokenPart = token.split(' ')[1]; // Format: "Bearer token"
        const verified = jwt.verify(tokenPart, process.env.JWT_SECRET);
        req.user = verified; // Store the user information in req.user
        next();
    } catch (err) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};
