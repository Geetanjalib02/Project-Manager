const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    Name: String,
    TotalEstimate: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);