module.exports = (app) => {

    const empl = require('../controllers/employee.controller.js');

    // Create a new Note
    app.post('/employee', empl.create);
    app.get('/employees', empl.findAll);


}