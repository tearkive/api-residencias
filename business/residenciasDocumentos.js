const { getConnection } = require('../config/database');

async function getResidencesDocs() {
    try {
        const connection = await getConnection();
        const query = `SELECT * FROM DocumentoResidencia`;
        let result;
        try {
            result = await connection.query(query);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}

async function postResidenceDocs(ResidenceDocsData) {
    try {
        const connection = await getConnection();
        const query = `INSERT INTO DocumentoResidencia (comentarios, documentoId, residenciaId, statusDocumento, archivo) VALUES (?, ?, ?, ?, ?)`;
        
        // Asegúrate de que 'archivo' corresponda al nombre del archivo subido
        const values = [
            ResidenceDocsData.comentarios,
            ResidenceDocsData.documentoId,
            ResidenceDocsData.residenciaId,
            ResidenceDocsData.statusDocumento,
            ResidenceDocsData.archivo // Cambia esto según cómo recibas el archivo
        ];

        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}

async function putResidenceDocs(id, ResidenceDocsData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE DocumentoResidencia 
                       SET comentarios = ?, documentoId = ?, residenciaId = ?, 
                           statusDocumento = ?, archivo = ? 
                       WHERE id = ?`;
        const values = [
            ResidenceDocsData.comentarios,
            ResidenceDocsData.documentoId,
            ResidenceDocsData.residenciaId,
            ResidenceDocsData.statusDocumento,
            ResidenceDocsData.archivo, // Aquí puedes usar el nuevo nombre del archivo
            id
        ];

        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}
module.exports = { getResidencesDocs, postResidenceDocs, putResidenceDocs };