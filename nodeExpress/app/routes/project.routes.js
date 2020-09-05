module.exports = (app) => {
    const project = require('../controllers/project.controller');

    // Create a new Note
    app.post('/project', project.create);
    app.get('/projects', project.findAll);

}