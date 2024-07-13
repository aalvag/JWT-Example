import app from "./app.js";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";

app.use("/auth", authRoutes);
app.use("/", protectedRoutes);

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", { title: "Error", message: "Algo salió mal!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
