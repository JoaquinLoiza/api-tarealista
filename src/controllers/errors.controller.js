
const resourceNotFound = (req, res) => {
    res.status(404).json({mensaje: "Error! recurso no encontrado"});
}

module.exports = {
    resourceNotFound
}