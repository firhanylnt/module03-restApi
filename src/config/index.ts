import { config } from "dotenv";

config({
  path: ".env",
});

export const { PORT, API_URL } = process.env;