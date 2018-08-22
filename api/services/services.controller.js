const serviceModel = require('./services.model');
const md5 = require('md5');

module.exports = { getAll, getById, createService, deleteService };

function getAll (req, res) {
    serviceModel.find()
        .then (response => {
            res.json(response);
        })
        .catch ( err => {
            res.json(err);
        });
}

function getById (req, res) {
    serviceModel.findOne({ "title": req.params.id }) 
        .then( response => {
            res.json(response);
        }) 
        .catch ( err  => {
            res.json(err);
        })
}

function createService (req, res) {
    const { title, description, apiurl } = req.body;
    const service = new serviceModel ({ 
        title, description, apiurl
    });
    const error = service.validateSync();
    if (!error) {
        service.save();
        res.json(service);
    } else {
        res.status(400).json(error.errors);
    }
}

function deleteService (req, res) {
    serviceModel.findOne( { "title": req.params.id} )
        .remove()
        .then ( response => {
            res.json(response);
        })
        .catch (err => {
            res.status(404).json(err);
        })
    
}