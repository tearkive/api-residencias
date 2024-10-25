const {getConnection} = require('../config/database');

async function getDocuments() {
    try {
        const connection = await getConnection();
        const query = `select * from Documento`;
        let result;
        try {
            result = await connection.query(query);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result }
    } catch (e) {
        return { success: false, error: `${e}`}
    }
}

async function postDocument(documentData) {
    try {
        const connection = await getConnection();
        const query = `INSERT INTO Documento (nombre) VALUES (?)`;
        const values = [documentData.nombre];

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

async function putDocument(id, documentData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE Documento SET nombre = ? WHERE id = ?`;
        const values = [documentData.nombre, id];

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

module.exports = { getDocuments , postDocument, putDocument}