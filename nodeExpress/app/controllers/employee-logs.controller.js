const Note = require('../models/employee-logs.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.eId || !req.body.pId || !req.body.logDate || !req.body.logTime) {
        return res.status(400).send({
            message: "Logs content can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        projectId: req.body.pId,
        EmployeeId: req.body.eId,
        DateLog: req.body.logDate,
        TimeLog: req.body.logTime
    });

    // Save Note in the database
    note.save()
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
    var parameters = {}
    if (req.query.eId) {
        parameters.EmployeeId = req.query.eId
    }
    if (req.query.pId) {
        parameters.projectId = req.query.pId
    }
    Note.find(parameters)
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};