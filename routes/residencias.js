var express = require('express');
var router = express.Router();
const { getResidences ,  putResidence, postResidence} = require('../business/residencias');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/residences', async function(req, res, next) {
    const response = await getResidences();
    res.send(response);
});

router.post('/residences', async (req, res) => {
    const result = await postResidence(req.body);
    res.json(result);
});

router.put('/residences/:id', async (req, res) => {
    const result = await putResidence(req.params.id, req.body);
    res.json(result);
});

module.exports = router;