var express = require('express');
var router = express.Router();
const { getTeachers, insertTeacher, updateTeacher, findTeachersByCareer } = require('../business/maestro');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/getTeachers', async function(req, res, next) {
    const response = await getTeachers();
    res.send(response);
});

router.post('/insertTeacher', async function(req, res, next) {
    const request = req.body;
    const response = await insertTeacher(request);
    res.send(response);
});

router.put('/updateTeacher/:id', async function(req, res, next) {
    const request = req.body;
    const response = await updateTeacher(req.params.id, request);
    res.send(response);
});

router.post('/findTeachersByCareer', async function(req, res, next) {
    const request = req.body;
    const response = await findTeachersByCareer(request);
    res.send(response);
});

module.exports = router;