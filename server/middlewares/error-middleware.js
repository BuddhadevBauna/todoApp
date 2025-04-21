const error = (err, req, res, next) => {
    const status = err.status ?? 500;
    const message = err.message ?? "Server error.";
    return res.status(status).json({message});
}

export default error;