const modelProjects = require("../models/projects.model.js");

const getProjects = async (req, res, next) => {
    try {
        const result = await modelProjects.getAllProjects();
        res.status(200).json(result);
    } catch (error) {
        next(error); //Llama al middleware de errores con el error
    }
}

const getProject = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await modelProjects.getProject(id);
        res.status(200).json(result);
    } catch (error) {
        next(error); //Llama al middleware de errores con el error
    }
}

const createProject = async (req, res) => {

    const { title, creator } = req.body;
    //Falta validar datos.

    try {
        const result = await modelProjects.createProject(title, creator);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

const editProject = (req, res) => {
    res.status(200).json({mensaje: "Editado con exito"});
}

const deleteProject = (req, res) => {
    res.status(200).json({mensaje: "Eliminado con exito"});
}

module.exports = {
    getProjects,
    getProject,
    createProject,
    editProject,
    deleteProject
}