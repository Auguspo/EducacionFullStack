import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/palabrasRoute.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/palabras";

const app = express();

mongoose
  .connect(DB_CONNECTION_STRING)
  .then(() => {
    console.log("Conexión establecida con MongoDB");    console.log("Enlaces:");
    console.log(`- http://localhost:${PORT}/frase`);
    console.log(`- http://localhost:${PORT}/agregarpalabra`);
  })
  .catch((error) => {
    console.error("Error al conectar con MongoDB:", error.message);
  
  });

app.use(express.json());

app.use("/agregarpalabra", express.static("public"));
app.use(router);

try {
  app.listen(PORT, () => {
    console.log("Aplicacion corriendo en puerto", PORT);
  });
} catch (error) {
  console.error(error);
}
