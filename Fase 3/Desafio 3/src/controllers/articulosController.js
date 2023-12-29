// controllers/articulosController.js
import { Articulo } from '../models/articuloModel.js';

export const obtenerArticulos = async (req, res) => {
  try {
    const articulos = await Articulo.find({}, { _id: 0 });
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const agregarArticulo = async (req, res) => {
  const nuevoArticulo = new Articulo(req.body);
  try {
    const articuloGuardado = await nuevoArticulo.save();
    console.log("Datos del formulario:", req.body);
    res.status(201).json(articuloGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

