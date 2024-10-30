var express = require('express');
var router = express.Router();
const { getAsesorRevisor ,  postAsesorRevisor, putAsesorRevisor} = require('../business/asesorRevisor');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/asesorRevisor', async function(req, res, next) {
    const response = await getAsesorRevisor();
    res.send(response);
});

router.post('/asesorRevisor', async (req, res) => {
    const result = await postAsesorRevisor(req.body);
    res.json(result);
});

router.put('/asesorRevisor/:id', async (req, res) => {
    const result = await putAsesorRevisor(req.params.id, req.body);
    res.json(result);
});

module.exports = router;