const md5 = require('md5');
const jwt = require('jsonwebtoken');
const usersModel = require('../../api/users/users.model');


module.exports.createUserToken = async (req, res) => {
    const username = req.body.username;
    const password = md5(req.body.password);
    console.log("entra")
    usersModel.findOne({ "username": username }) 
        .then( response => {
            if (password === response.password){
                const token =  jwt.sign(
                    { 
                        username: response.username,
                        exp: Date.now()/1000+600 
                    }, 
                    '427609685',
                )
                return res.status(200).json(token);
            } else {
                return res.sendStatus(400); 
            }
        })
        .catch ( error => {
            return res.sendStatus(400);
        })
    }
  
module.exports.createUserToken.verb = 'post'
module.exports.createUserToken.path = '/'