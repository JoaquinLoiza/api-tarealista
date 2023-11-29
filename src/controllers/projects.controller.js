const modelProjects = require("../models/projects.model.js");

const getProjects = async (req, res, next) => {
    try {
        const result = await modelProjects.getAllProjects();
        res.status(200).json(result);
    } catch (error) {
        next(error); //Llama al middleware de errores con el error
    }
}

const createProject = (req, res) => {
    res.status(201).json({mensaje: "Creado con exito"});
}

const editProject = (req, res) => {
    res.status(200).json({mensaje: "Editado con exito"});
}

const deleteProject = (req, res) => {
    res.status(200).json({mensaje: "Eliminado con exito"});
}

module.exports = {
    getProjects,
    createProject,
    editProject,
    deleteProject
}