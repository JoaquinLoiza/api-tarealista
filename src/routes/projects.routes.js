const express = require('express');
const projects = require('../controllers/projects.controller.js');

const router = express.Router();

router.get("/projects", projects.getProjects);

router.post("/projects", projects.createProject);

router.put("/projects/:id", projects.editProject);

router.delete("/projects/:id", projects.deleteProject);

module.exports = router;