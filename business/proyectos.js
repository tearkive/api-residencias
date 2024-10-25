const {getConnection} = require('../config/database');

async function getProjects() {
    try {
        const connection = await getConnection();
        const query = `select * from Proyecto`;
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

async function postProject(projectData) {
    try {
        const connection = await getConnection();
        const query = `INSERT INTO Proyecto (titulo, descripcion) VALUES (?,?)`;
        const values = [projectData.titulo, projectData.descripcion];

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

async function putProject(id, projectData) {
    try {
        const connection = await getConnection();
        const query = `UPDATE Proyecto SET titulo = ?, descripcion = ? WHERE id = ?`;
        const values = [projectData.titulo, projectData.descripcion, id];

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

module.exports = { getProjects , postProject, putProject}