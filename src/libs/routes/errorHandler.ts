/**
 * Middleware
 */

 export default (err, req, res, next) => {

    const { message, status, error } = err;

    const errorResponse = {
        error: error || 'Not Found',
        message: message || 'error',
        status: status || 500,
        timestamp: new Date()
    };

    res.status(errorResponse.status).json(errorResponse);
};
