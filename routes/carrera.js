var express = require('express');
var router = express.Router();
const { getCareer , postCareer, putCareer, getCoorCarre, postCoorCarre, putCoorCarre} = require('../business/carrera');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getCareer', async function(req, res, next) {
    const response = await getCareer();
    res.send(response);
});

router.post('/postCareer', async (req, res) => {
    const result = await postCareer(req.body);
    res.json(result);
});

router.put('/putcareer/:id', async (req, res) => {
    const result = await putCareer(req.params.id, req.body);
    res.json(result);
});

router.get('/getCoorCarre', async function(req, res, next) {
    const response = await getCoorCarre();
    res.send(response);
});

router.post('/postCoorCarre', async (req, res) => {
    const result = await postCoorCarre(req.body);
    res.json(result);
});

router.put('/putCoorCarre/:id', async (req, res) => {
    const result = await putCoorCarre(req.params.id, req.body);
    res.json(result);
});

module.exports = router;