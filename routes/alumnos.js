var express = require('express');
var router = express.Router();
const { getStudents } = require('../business/alumnos');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/getStudents', async function(req, res, next) {
    const response = await getStudents();
    res.send(response);
});

module.exports = router;