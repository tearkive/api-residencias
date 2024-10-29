const {getConnection} = require('../config/database');

async function getCareer() {
    try {
        const connection = await getConnection();
        const query = `select * from Carrera`;
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

async function postCareer(careerData) {
    try {
        const connection = await getConnection();
        const query = `INSERT INTO Carrera (nombre,turno) VALUES (?,?)`;
        const values = [careerData.nombre,careerData.turno];

        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.rollback();
            await connection.release();
            throw e;
        }
        await connection.commit();
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}

async function putCareer(id, careerData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE Carrera SET nombre = ?,turno = ?, WHERE id = ?`;
        const values = [careerData.nombre,careerData.turno, id];

        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.rollback();
            await connection.release();
            throw e;
        }
        await connection.commit();
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}

async function getCoorCarre() {
    try {
        const connection = await getConnection();
        const query = `select * from CoordinadorCarrera`;
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

async function postCoorCarre(coorcarreData) {
    try {
        const connection = await getConnection();
        const query = `INSERT INTO CoordinadorCarrera (nombre,email,telefono) VALUES (?,?,?)`;
        const values = [coorcarreData.nombre,coorcarreData.email,coorcarreData.telefono];

        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.rollback();
            await connection.release();
            throw e;
        }
        await connection.commit();
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}

async function putCoorCarre(id, coorcarreData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE CoordinadorCarrera SET nombre = ?, email = ?, telefono = ? WHERE id = ?`;
        const values = [coorcarreData.nombre,coorcarreData.email, coorcarreData.telefono, id];

        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.rollback();
            await connection.release()
            throw e;
        }
        await connection.commit();
        await connection.release();
        return { success: true, data: result };
    } catch (e) {
        return { success: false, error: `${e}` };
    }
}

module.exports = { getCareer , postCareer, putCareer, getCoorCarre, postCoorCarre, putCoorCarre}