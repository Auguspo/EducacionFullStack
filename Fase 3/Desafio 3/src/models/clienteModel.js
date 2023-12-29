// models/clienteModel.js
import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  dni: String,
},{ versionKey: false });

export const Cliente = mongoose.model('Cliente', clienteSchema);


