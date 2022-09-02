const express = require('express');
const { Registrations } = require('../models/registrations.model');

//controller
const {
    getAllRegistrations,
    createRegistrations,
    updateRegistrations,
    deleteRegister,
} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);

registrationsRouter.post('/', createRegistrations);

registrationsRouter.patch('/:id', updateRegistrations);

registrationsRouter.delete('/:id', deleteRegister);

module.exports = { registrationsRouter };
