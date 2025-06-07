const express = require('express');
const router = express.Router();

router.get('/weather', (req, res) => {
    // Simulate fetching weather data
    const weatherData = {
        location: 'New York',
        temperature: '22°C',
        condition: 'Sunny'
    };

    res.json(weatherData);
})

module.exports = router;