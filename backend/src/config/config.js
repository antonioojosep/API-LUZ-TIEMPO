import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DATABASE_PATH = process.env.DATABASE_PATH || "backend/database/luz.sqlite";
export const API_URL = process.env.API_URL;