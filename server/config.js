
const configs = {
    waetherApiKey: process.env.WEATHER_API_KEY,
    mongoDBURI: process.env.MONGODB_URI,
    port: process.env.PORT || 5000,
    allwedOrigins: [
        'http://localhost:5173',
    ]
}
module.exports = config;