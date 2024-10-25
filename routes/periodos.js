var express = require('express');
var router = express.Router();
const { getPeriods , postPeriod, putPeriod} = require('../business/periodos');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/periods', async function(req, res, next) {
    const response = await getPeriods();
    res.send(response);
});

router.post('/periods', async (req, res) => {
    const result = await postPeriod(req.body);
    res.json(result);
});

router.put('/periods/:id', async (req, res) => {
    const result = await putPeriod(req.params.id, req.body);
    res.json(result);
});

module.exports = router;