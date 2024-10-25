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

module.exports = { getStudents }