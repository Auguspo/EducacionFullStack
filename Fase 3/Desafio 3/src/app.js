import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";
import { Cliente } from "./models/clienteModel.js";
import { Articulo } from "./models/articuloModel.js";

dotenv.config();
const PORT = process.env.PORT || "3000";
const URL = process.env.MONGODB_URI || "mongodb://localhost:3000/empresa";
const app = express();

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conexión establecida con MongoDB");
})
.catch((error) => {
  console.error("Error al conectar con MongoDB:", error.message);
});

app.use(express.json());

app.use("/formulario", express.static("public"));
app.use(router);

try {
  app.listen(PORT, () => {
    console.log("Aplicacion corriendo en puerto", PORT);
  });
} catch (error) {
  console.error(error);
}
