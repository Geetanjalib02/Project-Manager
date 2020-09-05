const Empl = require('../models/EmployeeSchema.model.js');

    exports.create = (req, res) => {
        // Validate request
        if(!req.body.ename) {
            return res.status(400).send({
                message: "Employee details can not be empty"
            });
        }
    
        // Create an Employee
        const emp = new Empl({
            EName: req.body.ename || "Employee 1", 
        });
    
        // Save Employee details in the database
        emp.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    };

    // Retrieve and return all Employee details from the database.
    exports.findAll = (req, res) => {
        Empl.find()
        .then(emp => {
            res.send(emp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };

