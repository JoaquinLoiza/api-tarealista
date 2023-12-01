
const resourceNotFound = (req, res) => {
    res.status(404).json({ message: "Resource not found" });
}

const userInputInvalid = (res, message) => {
    res.status(400).json({ message });
} 

const serverError = (err, req, res, next) => {
    console.error('Error message:', err.message);
    res.status(500).json({ message: "Something went wrong!" });
};

module.exports = {
    resourceNotFound,
    userInputInvalid,
    serverError
}