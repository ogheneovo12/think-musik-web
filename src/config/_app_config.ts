export const APP_CONFIG = {
  ACCESS_TOKEN_KEY: "accessToken",
  REFRESH_TOKEN_KEY: "refreshToken",
  ENVIRONMENT: {
    development: process.env.NEXT_PUBLIC_ENVIRONMENT === "development",
    production: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
  },
  BASE_API_URL:
    process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT || "http://127.0.0.1:8080/",
  GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
};
