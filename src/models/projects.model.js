const pool = require("../database/dbConnection.js");

const getAllProjects = async () => {
    try {
        const result = await pool.query("SELECT * FROM projects");     
        return result[0];
    } catch(error) {
        throw new Error(`Error fetching projects: ${error.message}`);
    }
}

const getProject = async (idProject) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM projects WHERE id=?`, idProject);

        if (rows.length <= 0) {
            //tendria que responder desde el controlador de errores
            //el mensaje "resource not found" con "status: 404".
        }
        return (rows[0]);
      
    } catch(error) {
        throw new Error(`Error fetching projects: ${error.message}`);
    }
}

const createProject = async (title, creator) => {
    try {
        const [rows] = await pool.query("INSERT INTO projects (title, creator) VALUES (?,?)",
         [title, creator]);
        
        return {
            id: rows.insertId,
            title,
            creator
        };

    } catch(error) {
        throw new Error(`Error build project: ${error.message}`);
    }
}

module.exports = {
    getAllProjects,
    getProject,
    createProject
}