// models/articuloModel.js
import mongoose from 'mongoose';

const articuloSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
},{ versionKey: false });

export const Articulo = mongoose.model('Articulo', articuloSchema);
