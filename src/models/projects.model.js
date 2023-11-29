const pool = require("../database/dbConnection.js");

const getAllProjects = async () => {
    try {
        const result = await pool.query("SELECT * FROM projects");     
        return result[0];
    } catch(error) {
        throw new Error(`Error fetching projects: ${error.message}`);
    }
}

module.exports = {
    getAllProjects
}