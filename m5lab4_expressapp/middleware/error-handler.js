export default function errorHandler (err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const errorResponse = {
        message: err.message || "Internal server error",
        statusCode
    }
    console.log(errorResponse)
    res.status(statusCode).json(errorResponse);
}