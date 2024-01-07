import PalabraModel from "../models/palabraModel.js";

class PalabrasService {
  async obtenerFraseCompleta() {
    try {
      const palabras = await PalabraModel.find().select("-__v");
      if (!palabras || palabras.length === 0) {
        throw new Error("No se encontraron palabras en la base de datos");
      }
      const fraseCompleta = palabras
        .map((palabra) => palabra.palabra)
        .join(" ");
      return fraseCompleta;
    } catch (error) {
      throw new Error(`Error al obtener la frase completa: ${error.message}`);
    }
  }

  async agregarPalabra(palabra) {
    try {
      const nuevaPalabra = new PalabraModel(palabra);
      await nuevaPalabra.save();
    } catch (error) {
      throw new Error("Error al agregar la palabra");
    }
  }
}

export default new PalabrasService();
