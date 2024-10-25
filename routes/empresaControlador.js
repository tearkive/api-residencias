var express = require('express');
var router = express.Router();
const { getEmpresa } = require('../business/empresa');
const { createEmpresa } = require('../business/empresa');
const { updateEmpresa } = require('../business/empresa');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getEmpresa', async function(req, res, next) {
    const response = await getEmpresa();
    res.send(response);
});

router.post('/createEmpresa', async function(req, res, next) {
    const { nombre, razonSocial, domicilio, giro } = req.body;
    const response = await createEmpresa(nombre, razonSocial, domicilio, giro);
    res.send(response);
});

router.put('/updateEmpresa', async function(req, res, next) {
    const { id, nombre, razonSocial, domicilio, giro } = req.body;
    const response = await updateEmpresa(id, nombre, razonSocial, domicilio, giro);
    res.send(response);
});


module.exports = router;