const mongoose = require('mongoose');
const config =require('../config')


const connectDB = async function () {
    try {

       await mongoose.connect(config.mongoDBURI).then(() => {
            console.log('Connected to MongoDB');

        })
    } catch (error) {
        console.error('Error connecting to MongoDB:', err);
    }
}

const disconnectDB = async function () {

    try {
       await mongoose.disconnect()

    } catch (error) {

    }

}


module.exports = {
    connectDB,
    disconnectDB
};