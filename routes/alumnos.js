var express = require('express');
var router = express.Router();
const { getStudents, insertStudent, updateStudent, findStudentsByCareer } = require('../business/alumnos');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/getStudents', async function(req, res, next) {
    const response = await getStudents();
    res.send(response);
});

router.post('/insertStudent', async function(req, res, next) {
    const request = req.body;
    const response = await insertStudent(request);
    res.send(response);
});

router.put('/updateStudent/:id', async function(req, res, next) {
    const request = req.body;
    const response = await updateStudent(req.params.id, request);
    res.send(response);
});

router.post('/findStudentsByCareer', async function(req, res, next) {
    const request = req.body;
    const response = await findStudentsByCareer(request);
    res.send(response);
});

module.exports = router;