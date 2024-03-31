export const getEnvironmentName = () => {
  return import.meta.env.VITE_ENVIRONMENT || "development";
};
