// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const weatherRoutes = require('./routes/weather');
const dbConnection = require('./mongodb/mongoDbConnection');

const allwedOrigins = [
    'http://localhost:5173',
]

// Middleware
app.use(cors({
    origins: function (origin, callback) {
        if (!origion || allwedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    exposedHeaders: ['Authorization'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Basic route
app.get('/api', (req, res) => {
    res.send('Weather Forecast API');
});

app.use('/api', weatherRoutes);

dbConnection.connectDB()

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});