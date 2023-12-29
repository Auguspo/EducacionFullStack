// controllers/clientesController.js
// En tu archivo 'clientesController.js'
import { Cliente } from "../models/clienteModel.js";

export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find({}, { _id: 0 });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const agregarCliente = async (req, res) => {
  const nuevoCliente = new Cliente(req.body);
  try {
    console.log("Datos del formulario:", req.body);
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
