import express from "express";
import palabrasController from "../controllers/palabrasController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.get("/frase", palabrasController.getFrase);
router.post("/agregarpalabra", palabrasController.agregarPalabra);

export default router;
