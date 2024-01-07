import palabrasService from "../services/palabrasService.js";
import { palabraSchema } from "../validations/palabrasValidation.js";

class PalabrasController {
  async getFrase(req, res) {
    try {
      const fraseCompleta = await palabrasService.obtenerFraseCompleta();
      res.status(200).json({ fraseCompleta });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async agregarPalabra(req, res) {
    try {
      const { error } = palabraSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const palabra = { palabra: req.body.palabra };
      await palabrasService.agregarPalabra(palabra);

      res.status(201).json({ mensaje: "Palabra agregada exitosamente" });
    } catch (error) {
      res
        .status(400)
        .json({
          error: "La palabra debe contener solo una palabra sin espacios.",
        });
      res.status(500).json({ error: error.message });
    }
  }
}

export default new PalabrasController();
