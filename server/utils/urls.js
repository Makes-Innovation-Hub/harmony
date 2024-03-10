const port = process.env.PORT;
const baseUrl = process.env.BASE_SERVER_URL;

const environment = process.env.NODE_ENV;

const renderUrl = `${process.env.RENDER_URL}`;

export const serverApiUrl =
  environment === "production" ? renderUrl : `${baseUrl}:${port}`;

export const clientUrl =
  environment === "production"
    ? process.env.PRODUCTION_FRONT_URL
    : `${baseUrl}:${process.env.CLIENT_PORT}`;
