var express = require('express');
var router = express.Router();
const { getProjects ,  putProject, postProject} = require('../business/proyectos');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/projects', async function(req, res, next) {
    const response = await getProjects();
    res.send(response);
});

router.post('/projects', async (req, res) => {
    const result = await postProject(req.body);
    res.json(result);
});

router.put('/projects/:id', async (req, res) => {
    const result = await putProject(req.params.id, req.body);
    res.json(result);
});

module.exports = router;