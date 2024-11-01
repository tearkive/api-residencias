const {getConnection} = require('../config/database');

async function getTeachers() {
    try {
        const connection = await getConnection();
        const query = `select * from Maestro`;
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

async function insertTeacher(params){
    try {
        const connection = await getConnection();
        const query = `insert into Maestro (nombre, email, telefono, idCarrera) values (?,?,?,?)`;
        let result;
        try {
            result = await connection.query(query, [params.nombre, params.email, params.telefono, params.carreraId]);
        } catch (error) {
            await connection.rollback();
            await connection.release();
            throw error;
        }
        await connection.commit();
        await connection.release();
        return {success: true, data: result};
    } catch (error) {
        return {success: false, error: `${error}`};
    }
}

async function updateTeacher(id, params) {
    try {
        const connection = await getConnection();
        const query = `update Maestro set nombre = ?, email = ?, telefono = ?, idCarrera = ? WHERE id = ?`;
        let result;
        try {
            result = await connection.query(query, [params.nombre, params.email, params.telefono, params.carreraId, id]);
        } catch (e) {
            await connection.rollback();
            await connection.release();
            throw e;
        }
        await connection.commit();
        await connection.release();
        return { success: true, data: result };
    } catch (error) {
        return {success: false, error: `${error}`};
    }
}

async function findTeachersByCareer() {
    try {
        const connection = await getConnection();
        const query =  `select m.* from Maestro m left join Carrera c on m.carreraId = c.id where c.nombre = ?`;
        let result;
        try {
            result = await connection.query(query, params.nombreCarrera);
        } catch (e) {
            await connection.release();
            throw e;
        }
        await connection.release();
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error: `${e}`};
    }
}

module.exports = { getTeachers, insertTeacher, updateTeacher, findTeachersByCareer }