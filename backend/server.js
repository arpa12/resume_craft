// server/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

dotenv.config(); // Load environment variables

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // Adjust the origin as needed
}));
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
