import pino from "pino";

const logger = pino();

const loggingMiddleware = (req, res, next) => {
  logger.info(
    `Incoming request - Method: ${req.method}, URL: ${req.originalUrl}`
  );

  if (req.params && Object.keys(req.params).length > 0) {
    logger.info("URL Parameters:", req.params);
  }

  if (req.body) {
    logger.info("Request Body:", req.body);
  }

  next();
};

export default loggingMiddleware;
