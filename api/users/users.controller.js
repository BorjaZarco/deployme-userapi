const usersModel = require('./users.model');
const md5 = require('md5');

module.exports = { getById, createUser, deleteUser, editUser };

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
    const { email, username } = req.body;
    const password = md5(req.body.password);
    const user = new usersModel ({ 
        email, username, password, ec2: []
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

function editUser (req, res) {
    usersModel.findOne({ "username": req.params.id })
        .then(response => {
        if (req.body && req.body.ec2) {
            response.ec2.pop();
            response.ec2.push(req.body.ec2);
        }

        response.save();
        res.json(response);
        })
        .catch(err => {
            res.status(404).json(err);
        })
} 
