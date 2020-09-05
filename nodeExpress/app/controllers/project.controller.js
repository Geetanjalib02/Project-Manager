const Proj = require('../models/ProjectSchema.model.js');
const { request } = require('http');

    exports.create = (req, res) => {
        // Validate request
        if(!req.body.projname || !req.body.estimate) {
            return res.status(400).send({
                message: "Project content can not be empty"
            });
        }
    
        // Create a Project
        const proj = new Proj({
            Name: req.body.projname,           
            TotalEstimate: req.body.estimate
        });
    
        // Save Note in the database
        proj.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    };

    // Retrieve and return all notes from the database.
    exports.findAll = (req, res) => {
        Proj.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };

