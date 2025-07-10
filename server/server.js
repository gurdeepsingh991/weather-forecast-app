// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config')
const weatherRoutes = require('./routes/weather');
const {connectDB} = require('./mongodb/mongoDbConnection');

// Middleware
app.use(cors({
    origins: function (origin, callback) {
        if (!origion || config.allwedOrigins.indexOf(origin) !== -1) {
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

connectDB()

// Start server
app.listen(config.port, () => {
    console.log(`Server running on port ${PORT}`);
});
