var jwt = require('jsonwebtoken');
var jwtAuth = require('express-jwt');
var config = require('config');
var express = require('express');
var router = express.Router();

const db = require('../db');


router.use('/admin', require('./admin'));
router.use('/issue', require('./issue'));
router.use('/volunteer', require('./volunteer'));
router.use('/contact', require('./contact'));
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Water Conservation'
    });
});









module.exports = router;