const {getConnection} = require('../config/database');

async function getAsesorRevisor() {
    try {
        const connection = await getConnection();
        const query = `select * from AsesorRevisor`;
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


async function postAsesorRevisor(AsesorRevisorData) {
    try {
        const connection = await getConnection();
const query = `INSERT INTO AsesorRevisor (IdAsesorExt, IdAsesorInt, IdRevisor1, IdRevisor2) VALUES (?,?,?,?)`;
        const values = [AsesorRevisorData.IdAsesorExt,AsesorRevisorData.IdAsesorInt, AsesorRevisorData.IdRevisor1,ResidenceData.IdRevisor2];
        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            await connection.rollback();
            throw e;
        }
        await connection.release();
        await connection.commit();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}


async function putAsesorRevisor(id, AsesorRevisorData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE AsesorRevisor SET IdAsesorExt = ?, IdAsesorInt = ?, IdRevisor1 = ?, IdRevisor2 = ? WHERE id = ?`;
        const values = [AsesorRevisorData.IdAsesorExt, AsesorRevisorData.IdAsesorInt, AsesorRevisorData.IdRevisor1, AsesorRevisorData.IdRevisor2, id];

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

module.exports = { getAsesorRevisor , postAsesorRevisor, putAsesorRevisor}