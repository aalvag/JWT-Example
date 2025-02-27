import dotenv from "dotenv";

dotenv.config();

export default {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
