module.exports = (app) => {
    const empLogs = require('../controllers/employee-logs.controller');

    app.post('/log', empLogs.create);
    app.get('/logs', empLogs.findAll);

}