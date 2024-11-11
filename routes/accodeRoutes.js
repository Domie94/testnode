'use strict';

const express = require('express');
const eventControll = require('../controllers/accodeController');
const router = express.Router();

router.get('/accode', eventControll.getAllEvents);
router.get('/event/:id', eventControll.getEvent);
router.post('/event', eventControll.addEvent);
router.put('/event/:id', eventControll.updatEvent);
router.delete('/event/:id', eventControll.deleteEvent);


module.exports = {
    routes: router
}