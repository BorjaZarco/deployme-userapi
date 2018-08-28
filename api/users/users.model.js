const mongoose = require('mongoose');
require('dotenv').config();
//mongoose.connect('mongodb://localhost:27017/deployme')
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/deployme`);

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Este usuario ya está registrado"],
        required: [true, "Necesita introducir un nombre de usuario"]
    },
    password: {
        type: String,
        required: [true, "Necesita introducir una contraseña"]
    },
    email : {
        type: String,
        validate: {
            validator: function (mail) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
            }, 
            message: 'No se trata de una direccion válida'
        },
        required: [true, 'Email requerido']
    },
    ec2: {
        type: Array,
        //maxlength: 1,
    },
    activeJWT: {
        type: String
    }
});

const userdb = mongoose.model('user', userSchema);

module.exports = userdb;