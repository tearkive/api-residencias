const {getConnection} = require('../config/database');

async function getPeriods() {
    try {
        const connection = await getConnection();
        const query = `select * from Periodo`;
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

async function postPeriod(periodData) {
    try {
        const connection = await getConnection();
        const query = `INSERT INTO Periodo (periodo, año) VALUES (?, ?)`;
        const values = [periodData.periodo, periodData.año];

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

async function putPeriod(id, periodData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE Periodo SET periodo = ?, año = ? WHERE id = ?`;
        const values = [periodData.periodo, periodData.año, id];

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

module.exports = { getPeriods , postPeriod, putPeriod}