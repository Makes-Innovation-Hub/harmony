import pino from "pino";

const logger = pino({
  base: null, // Disable adding default fields like `pid` and `hostname`
});

const loggingMiddleware = (req, res, next) => {
  logger.info(
    { queryParameters: req.query }, // Include the query parameters in the logged object
    "Incoming request - Method: %s, URL: %s",
    req.method,
    req.originalUrl
  );

  if (req.params && Object.keys(req.params).length > 0) {
    logger.info("URL Parameters:", req.params);
  }

  if (req.body && Object.keys(req.body).length > 0) {
    const { body } = req;
    console.log(req.body);

    if (JSON.stringify(body).length > 1000) {
      logger.info("Request Body:", {
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
