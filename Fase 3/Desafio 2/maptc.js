const fs = require("fs").promises;

fs.readFile("package.json")
  .then((contenidoStr) => {
    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.from(contenidoStr).length + " bytes";

    let info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    return fs.writeFile("info.txt", JSON.stringify(info, null, "\t"));
  })
  .then(() => console.log("Archivos info.txt creado"))
  .catch((error) => console.error("Error", error.message));
