
const getProjects = (req, res) => {
    res.status(200).json({mensaje: "Hola con express"});
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