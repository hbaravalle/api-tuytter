import express from "express";
import config from "../config.js";
import userRoutes from "./components/user/userRoutes.js";

const app = express();

// Middlewares
app.use(express.json());

// Router
app.use("/api/users", userRoutes);

app.listen(config.api.port, () =>
  console.log("API escuchando en el puerto ", config.api.port)
);
