import ErrorResponse from "../utils/ErrorResponse.js";

const errorHandler = (error, req, res, next) => {
  let err = { ...error };

  err.message = error.message;

  console.error(error.stack);

  if (error.name === "CastError") {
    const message = `Resource not found`;
    err = new ErrorResponse(message, 404);
  }

  if (error.code === 11000) {
    const message = "Duplicate field value entered";
    err = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    err = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
};

export default errorHandler;
