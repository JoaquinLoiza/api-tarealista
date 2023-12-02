const z = require('zod');

const projectSchema = z.object({
    title: z.string({ required_error: 'Title is required' })
            .min(1, { message: 'Title cannot be empty' }),
    creator: z.string({ required_error: 'Creator is required' })
            .min(1, { message: 'Creator cannot be empty' })
});

const validateScheme = ( project ) => {
    return projectSchema.safeParse( project );
}

module.exports = {
    validateScheme
}