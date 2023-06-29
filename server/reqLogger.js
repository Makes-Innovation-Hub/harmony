import pino from "pino";

const logger = pino({
  base: null, // Disable adding default fields like `pid` and `hostname`
});

const loggingMiddleware = (req, res, next) => {
  logger.info(
    { queryParameters: req.query, params: req.params },
    // Include the query parameters in the logged object
    "Incoming request - Method: %s, URL: %s",
    req.method,
    req.originalUrl
  );

  if (req.params && Object.keys(req.params).length > 0) {
    logger.info("URL Parameters:", req.params);
  }

  if (req.body && Object.keys(req.body).length > 0) {
    const { body } = req;
    if (JSON.stringify(body).length > 1000) {
      logger.info("Request Body:", {
        length: Object.keys(body).length,
        importantFields: getImportantFields(body),
      });
    } else {
      logger.info("Request Body:", body);
    }
  }

  next();
};

const getImportantFields = (obj) => {
  const importantFields = {};

  for (const key in obj) {
    if (typeof obj[key] !== "object") {
      importantFields[key] = obj[key];
    }
  }

  return importantFields;
};

export default loggingMiddleware;
