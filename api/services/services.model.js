const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/deployme_services');

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