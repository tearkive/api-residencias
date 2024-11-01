const {getConnection} = require('../config/database');

async function getStudents() {
    try {
        const connection = await getConnection();
        const query = `select * from Alumno`;
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

async function insertStudent(params){
    try {
        const connection = await getConnection();
        const query = `insert into Alumno (numeroControl, email, nombre, apellidos, carreraId) values (?,?,?,?,?)`;
        let result;
        try {
            result = await connection.query(query, [params.numeroControl, params.email, params.nombre, params.apellidos, params.carreraId]);
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

async function updateStudent(id, params) {
    try {
        const connection = await getConnection();
        const query = `update Alumno set numeroControl = ?, email = ?, nombre = ?, apellidos = ?, carreraId = ? WHERE id = ?`;
        let result;
        try {
            result = await connection.query(query, [params.numeroControl, params.email, params.nombre, params.apellidos, params.carreraId, id]);
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

async function findStudentsByCareer(params) {
    try {
        const connection = await getConnection();
        const query =  `select a.* from Alumno a left join Carrera c on a.carreraId = c.id where c.nombre = ?`;
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
        return { success: false, error: `${error}`};
    }
}

module.exports = { getStudents, insertStudent, updateStudent, findStudentsByCareer }