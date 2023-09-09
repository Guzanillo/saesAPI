const express = require('express');
const mainRouter = express.Router();
const modsGradesRouter = require('./modGrades');
const gradesslistRouter = require('./gradeslist');

function mainRouting(app){
    app.use('/api/v1/restaurant', mainRouter);
    mainRouter.use('/modsGrades', modsGradesRouter);
    mainRouter.use('/gradesslist', gradesslistRouter);
}

module.exports = mainRouting;