const usersModel = require('./users.model');
const md5 = require('md5');

module.exports = { getAll, getById, createUser, deleteUser };

function getAll (req, res) {
    usersModel.find()
        .then (response => {
            res.json(response);
        })
        .catch ( err => {
            res.json(err);
        });
}

function getById (req, res) {
    usersModel.findOne({ "username": req.params.id }) 
        .then( response => {
            res.json(response);
        }) 
        .catch ( err  => {
            res.json(err);
        })
}

function createUser (req, res) {
    const { name, email, username, password } = req.body;
    const user = new usersModel ({ 
        name, email, username, password: md5(password), ec2: []
    });
    const error = user.validateSync();
    if (!error) {
        user.save();
        res.json(user);
    } else {
        res.status(400).json(error.errors);
    }
}

function deleteUser (req, res) {
    usersModel.findOne( { "username": req.params.id} )
        .remove()
        .then ( response => {
            res.json(response);
        })
        .catch (err => {
            res.status(404).json(err);
        })
    
}

// function editUser (req, res) {
//     usersModel.findOne({ "username": req.params.id })
//         .then(response => {
//         if (req.body && req.body.email) {
//             response.email = req.body.email;
//         }

//         if (req.body && req.body.name) {
//             response.name = req.body.name;
//         }
//         response.save();
//         res.json(response);
//         })
//         .catch(err => {
//             res.status(404).json(err);
//         })
// } 
