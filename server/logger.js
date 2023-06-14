import pino from "pino";

const loggerEnabled = process.env.LOGGER_ENABLED === "true";

let logger;
if (loggerEnabled) {
  logger = pino({
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "SYS:dd-mm-yyyy HH:MM",
        ignore: "pid,hostname",
      },
    },
  });
} else {
  logger = {
    info: () => {},
    debug: () => {},
    warn: () => {},
    error: () => {},
    // Add any other logger methods you're using
  };
}

export default logger;
