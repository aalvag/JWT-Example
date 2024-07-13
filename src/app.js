import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import passport from "passport";
import mongoose from "mongoose";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";

import secrets from "./config/secrets.js";
import "./config/passport.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser()); // Añadir el middleware para manejar cookies

// Configuración de Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Conexión a MongoDB (asegúrate de tener MongoDB instalado y ejecutándose)
mongoose
  .connect(secrets.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error conectando a MongoDB:", err));

export default app;
