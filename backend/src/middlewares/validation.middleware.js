const { ZodError } = require('zod');

const validate = (schema) => {
  return (req, res, next) => {
    try {
      // Validate the request body using Zod
      const result = schema.parse(req.body);
      
      // Replace the body with validated data
      req.body = result;
      
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Format Zod validation errors
        const errors = error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message
        }));

        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors
        });
      }
      
      // Pass other errors to the error handler
      next(error);
    }
  };
};

module.exports = { validate };