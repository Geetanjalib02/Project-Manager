const mongoose = require('mongoose');

const ProjEmployeeSchema = mongoose.Schema({
    DateLog: String,
    TimeLog: Number,
    projectId: String,
    EmployeeId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('ProjEmployee', ProjEmployeeSchema);