var express = require('express');
var router = express.Router();
const { getDocuments , postDocument, putDocument} = require('../business/documentos');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

router.get('/documents', async function(req, res, next) {
    const response = await getDocuments();
    res.send(response);
});

router.post('/documents', async (req, res) => {
    const result = await postDocument(req.body);
    res.json(result);
});

router.put('/documents/:id', async (req, res) => {
    const result = await putDocument(req.params.id, req.body);
    res.json(result);
});

module.exports = router;