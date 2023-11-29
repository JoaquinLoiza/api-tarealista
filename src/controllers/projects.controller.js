const modelProjects = require("../models/projects.model.js");
const errorsController = require("./errors.controller.js");
const projectScheme = require("../schemes/project.scheme.js");

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
    //Falta validar parametros validos

    try {
        const result = await modelProjects.getProject(id);
        if (result === null) {
            errorsController.resourceNotFound(req, res);
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        next(error); //Llama al middleware de errores con el error
    }
}

const createProject = async (req, res) => {

    const validate = projectScheme.validateProject(req.body);
    
    if(validate.error) {
       return res.status(400).json({error: JSON.parse(validate.error.message)});
    }

    try {
        const { title, creator } = req.body;
        const result = await modelProjects.createProject(title, creator);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

const editProject = async (req, res) => {

    const { id } = req.params;
    const { title, creator } = req.body;
    //Falta validar datos.

    try {
        const result = await modelProjects.editProject(id, title, creator);

        if (result === null) {
            errorsController.resourceNotFound(req, res);
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        next(error);
    }
}

const deleteProject = async (req, res) => {

    const { id } = req.params;
    try {
        const result = await modelProjects.deleteProject(id);

        if (result === null) {
            errorsController.resourceNotFound(req, res);
        } else {
            res.sendStatus(204);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProjects,
    getProject,
    createProject,
    editProject,
    deleteProject
}