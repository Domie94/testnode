'use strict';

const express = require('express');
const eventControll = require('../controllers/companyController');
const router = express.Router();

router.get('/company', eventControll.getAllEvents);
router.get('/company/:id', eventControll.getEvent);
router.post('/event', eventControll.addEvent);
router.put('/event/:id', eventControll.updatEvent);
router.delete('/event/:id', eventControll.deleteEvent);


module.exports = {
    routes: router
}