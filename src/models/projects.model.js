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
            return null;
        }
        return (rows[0]);
      
    } catch(error) {
        throw new Error(`Error fetching project: ${error.message}`);
    }
}

const editProject = async (idProject, title, creator) => {
    try {
        const [result] = await pool.query(
        "UPDATE projects SET title = ?, creator = ? WHERE id = ?",
        [title, creator, idProject]);

        if (result.affectedRows === 0) {
            return null;
        }

        return await getProject(idProject);
      
    } catch(error) {
        throw new Error(`Error edit project: ${error.message}`);
    }
}

const createProject = async (title, creator) => {
    try {
        const [rows] = await pool.query(
        "INSERT INTO projects (title, creator) VALUES (?,?)",
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

const deleteProject = async (idProject) => {
    try {
        const [rows] = await pool.query(
        "DELETE FROM projects WHERE id = ?",
        idProject);

        if (rows.affectedRows <= 0) {
            return null;
        }
        return true;
    } catch(error) {
        throw new Error(`Error delete project: ${error.message}`);
    }
}

module.exports = {
    getAllProjects,
    getProject,
    editProject,
    createProject,
    deleteProject
}