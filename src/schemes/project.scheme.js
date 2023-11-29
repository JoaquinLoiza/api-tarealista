
const z = require('zod');

const projectSchema = z.object({
    title: z.string(),
    creator: z.string()
});

const validateProject = (object) => {
    return projectSchema.safeParse(object);
}

module.exports = {
    validateProject
}