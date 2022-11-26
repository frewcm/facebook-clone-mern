const ErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.massage,
    stack: process.env.NODE_DEV === "production" ? err.message : err.stack,
  });
  next();
};

module.exports = ErrorHandler;
