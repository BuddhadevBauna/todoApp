const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (err) {
            const error = {
                status: 422,
                message: err.errors[0].message
            }
            next(error);
        }
    }
}

export default validate;