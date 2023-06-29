const port = import.meta.env.VITE_SERVER_PORT;
console.log("port", port);
const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;
console.log("base url", baseUrl);

export const serverApiUrl = `${baseUrl}:${port}/api/v1`;
