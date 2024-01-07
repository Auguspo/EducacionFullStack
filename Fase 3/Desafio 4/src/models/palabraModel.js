import mongoose from "mongoose";

const palabraSchema = new mongoose.Schema(
  {
    palabra: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const PalabraModel = mongoose.model("Palabra", palabraSchema);

export default PalabraModel;
