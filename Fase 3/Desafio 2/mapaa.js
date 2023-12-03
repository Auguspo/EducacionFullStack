import { promises as fs } from "fs";

async function main() {
  try {
    const contenidoStr = await fs.readFile("package.json", "utf-8");
    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.from(contenidoStr).length;

    let info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    await fs.writeFile("info.txt", JSON.stringify(info, null, "\t"));

    console.log("Archivo info.txt creado con éxito");
  } catch (error) {
    console.error("Error:", error.message);
  }
}
main();
