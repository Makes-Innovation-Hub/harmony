import pino from "pino";

// const loggerEnabled = process.env.LOGGER_ENABLED === "true";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:MM",
      ignore: "pid,hostname",
    },
  },
});


export default logger;
