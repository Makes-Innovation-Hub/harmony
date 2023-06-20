import pino from "pino";

const logger = pino({
  base: null, // Disable adding default fields like `pid` and `hostname`
});

const loggingMiddleware = (req, res, next) => {
  logger.info(
    `Incoming request - Method: ${req.method}, URL: ${req.originalUrl}`
  );

  if (req.query && Object.keys(req.query).length > 0) {
    logger.info("Query Parameters:", req.query);
  }

  if (req.params && Object.keys(req.params).length > 0) {
    logger.info("URL Parameters:", req.params);
  }

  if (req.body && Object.keys(req.body).length > 0) {
    const { body } = req;

    if (JSON.stringify(body).length > 1000) {
      logger.info("Request Body:", {
        // Log only important fields if the body is too long
        length: Object.keys(body).length,
        keys: Object.keys(body),
      });
    } else {
      logger.info("Request Body:", body);
    }
  }

  next();
};

export default loggingMiddleware;
