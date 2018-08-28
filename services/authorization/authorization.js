const jwt = require('jsonwebtoken')
const usersModel = require('../../api/users/users.model');

const checkLogged = (req, res, next) => {
    const jwtoken = req.headers['authorization'];
    jwt.verify(jwtoken, '427609685', (err, token) => {
        if( err ) {
            res.status(400).json(makeResponseError(401, "You need to send a valid token (Authorization Error)"))
        } else {
            usersModel.findOne({ "username": req.params.id }) 
        .then( response => {
            (jwtoken === response.activeJWT)               
            ? next()
            : res.status(401).json(makeResponseError(401, "You need to send the user token (Authorization Error)"))
        }) 
        .catch ( err  => {
            res.status(402).json(makeResponseError(401, "Invalid token (Authorization Error)"))
        })
        } 
    })
}


function makeResponseError(code, error) {
    return {
        status: "Forbidden",
        code: code,
        error: error
    }
}
 
 module.exports = checkLogged