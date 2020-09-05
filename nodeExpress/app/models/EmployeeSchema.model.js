const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    EName: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);