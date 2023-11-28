const pool = require("../database/dbConnection.js");

const getAllProjects = async () => {

   const result = await pool.query("SELECT * FROM projects");

   return result[0];
}


module.exports = {
    getAllProjects
}