import express from "express";
import {
  obtenerClientes,
  agregarCliente,
} from "../controllers/clientesController.js";
import {
  obtenerArticulos,
  agregarArticulo,
} from "../controllers/articulosController.js";
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.get("/api/clientes", obtenerClientes);
router.post("/api/clientes", agregarCliente);
router.get("/api/articulos", obtenerArticulos);
router.post("/api/articulos", agregarArticulo);
export default router;
