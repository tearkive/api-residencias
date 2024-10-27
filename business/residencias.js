const {getConnection} = require('../config/database');

async function getResidences() {
    try {
        const connection = await getConnection();
        const query = `select * from Residencia`;
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

async function postResidence(ResidenceData) {
    try {
        const connection = await getConnection();
const query = `INSERT INTO Residencia (alumnoNumControl, asesorRevisorId, empresaId, periodoId, proyectoId, statusResidencia) VALUES (?,?,?,?,?,?)`;
        const values = [ResidenceData.alumnoNumControl, ResidenceData.asesorRevisorId,ResidenceData.empresaId, ResidenceData.periodoId,ResidenceData.proyectoId, ResidenceData.statusResidencia];

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

async function putResidence(id, ResidenceData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE Residencia SET alumnoNumControl = ?, asesorRevisorId = ?,empresaId = ?, periodoId = ?,proyectoId = ?, statusResidencia = ? WHERE id = ?`;
        const values = [ResidenceData.alumnoNumControl, ResidenceData.asesorRevisorId,ResidenceData.empresaId, ResidenceData.periodoId,ResidenceData.proyectoId, ResidenceData.statusResidencia, id];

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

module.exports = { getResidences , postResidence, putResidence}