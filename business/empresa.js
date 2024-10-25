const { getConnection } = require('../config/database');

async function getEmpresa() {
    try {
        const connection = await getConnection();
        const query = `SELECT * FROM Empresa`;
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
        return { success: false, error: `${e}` }
    }
}

async function createEmpresa(nombre, razonSocial, domicilio, giro) {
    try {
        const connection = await getConnection();
        const query = `
            INSERT INTO Empresa (nombre, razonSocial, domicilio, giro)
            VALUES (?, ?, ?, ?)
        `;
        const values = [nombre, razonSocial, domicilio, giro];
        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            throw e;
        }
        const EmpresaId = result.insertId;
        const [newEmpresa] = await connection.query(
            `SELECT * FROM Empresa WHERE id = ?`, [EmpresaId]
        );
        await connection.release();
        return { success: true, data: newEmpresa }
    } catch (e) {
        return { success: false, error: `${e}` }
    }
}


async function updateEmpresa(id, nombre, razonSocial, domicilio, giro) {
    try {
        const connection = await getConnection();
        const query = `
            UPDATE Empresa
            SET nombre = ?, razonSocial = ?, domicilio = ?, giro = ?
            WHERE id = ?
        `;
        const values = [nombre, razonSocial, domicilio, giro, id];
        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result.affectedRows }
    } catch (e) {
        return { success: false, error: `${e}` }
    }
}


async function getAsesorExterno() {
    try {
        const connection = await getConnection();
        const query = `SELECT * FROM AsesorExterno`;
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
        return { success: false, error: `${e}` }
    }
}

async function createAsesorExterno(nombre, email ,  telefono, puesto, idEmpresa  ) {
    try {
        const connection = await getConnection();
        const query = `
            INSERT INTO AsesorExterno (nombre, email ,  telefono, puesto, idEmpresa)
            VALUES (?, ?, ?, ?, ?)
        `;
        const values = [nombre, email , telefono, puesto, idEmpresa];
        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            throw e;
        }
        const AEId = result.insertId;
        const [AsesorExterno] = await connection.query(
            `SELECT * FROM AsesorExterno WHERE id = ?`, [AEId]
        );
        await connection.release();
        return { success: true, data: AsesorExterno }
    } catch (e) {
        return { success: false, error: `${e}` }
    }
}

async function updateAsesorExterno(id, nombre, email ,  telefono, puesto, idEmpresa) {
    try {
        const connection = await getConnection();
        const query = `
            UPDATE AsesorExterno
            SET nombre = ?, email = ?, telefono = ?, puesto = ?, idEmpresa = ?
            WHERE id = ?
        `;
        const values = [nombre, email ,  telefono, puesto, idEmpresa, id];
        let result;
        try {
            result = await connection.query(query, values);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result.affectedRows }
    } catch (e) {
        return { success: false, error: `${e}` }
    }
}

module.exports = { getEmpresa, createEmpresa, updateEmpresa, getAsesorExterno, createAsesorExterno, updateAsesorExterno };
