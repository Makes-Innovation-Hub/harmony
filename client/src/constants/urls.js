const port = import.meta.env.VITE_SERVER_PORT;
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

export const serverApiUrl = `${baseUrl}:${port}/api/v1`;
