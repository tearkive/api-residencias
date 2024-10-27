var express = require('express');
var router = express.Router();
const { getResidencesDocs, putResidenceDocs, postResidenceDocs } = require('../business/residenciasDocumentos');
const upload = require('../config/multer');

// Ruta GET
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});  

// Ruta para obtener documentos de residencias
router.get('/residencesDocs', async function(req, res, next) {
    const response = await getResidencesDocs();
    res.send(response);
});

// Ruta POST para subir documentos
router.post('/residencesDocs', upload.single('file'), async (req, res) => {
    const fileData = req.file; // Aquí obtienes el archivo subido
    const bodyData = req.body; // Aquí obtienes los datos adicionales que enviaste
    
    // Procesa los datos del archivo y otros datos
    const result = await postResidenceDocs({ 
        ...bodyData, 
        archivo: fileData ? fileData.filename : null // Asegúrate de que el campo corresponda a lo que esperas en la base de datos
    });
    
    res.json(result);
});

// Ruta PUT para actualizar documentos
router.put('/residencesDocs/:id', upload.single('file'), async (req, res) => {
    const fileData = req.file; // Aquí obtienes el archivo subido (opcional)
    const bodyData = req.body; // Aquí obtienes los datos adicionales que enviaste
    
    // Procesa los datos para la actualización
    const result = await putResidenceDocs(req.params.id, { 
        ...bodyData, 
        archivo: fileData ? fileData.filename : null // Solo incluye el nuevo nombre del archivo si se subió uno
    });
    
    res.json(result);
});

module.exports = router;
