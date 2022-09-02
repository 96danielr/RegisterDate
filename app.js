// Import express
const { response } = require('express');
const express = require('express');

//Utils

//Routes

const { registrationsRouter } = require('./routes/registrations.routes');

//Init our Express
const app = express();

app.use(express.json());
//eneable to receive

//define endpoints
app.use('/registrations', registrationsRouter);

module.exports = { app };
