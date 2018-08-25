const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb://localhost:27017/deployme')
// mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/deployme`);

const serviceSchema = mongoose.Schema({
    title: {
        type: String,
        unique: [true, "Este usuario ya está registrado"],
        required: [true, "Necesita introducir un nombre de usuario"]
    },
    description: {
        type: String,
        required: [true, "Necesita introducir una contraseña"]
    },
    apiurl: {
        type: String,
        required: [true, "Necesita introducir una contraseña"]
    }
});

const servicedb = mongoose.model('service', serviceSchema);

module.exports = servicedb;