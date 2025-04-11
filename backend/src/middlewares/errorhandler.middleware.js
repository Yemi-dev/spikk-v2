// src/middlewares/errorHandler.js
const httpStatus = require('http-status');

const errorHandler = (err, req, res, next) => {
  // Handle intentional errors
  if (err.intentional) {
    res.status(err.status || httpStatus.BAD_REQUEST).json({
      success: false,
      message: err.message || 'Operation failed',
      error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
    return;
  }

  // Log the error
  console.error(`[${new Date().toISOString()}] Error:`, {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });

  // Production error response
  if (process.env.NODE_ENV === 'production') {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    });
    return;
  }

  // Development error response
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: {
      name: err.name,
      message: err.message,
      stack: err.stack,
    },
  });
};

module.exports = errorHandler;