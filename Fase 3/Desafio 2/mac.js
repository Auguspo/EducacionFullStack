const fs = require("fs");

fs.readFile("package.json", (err, contenidoStr) => {
  if (err) {
    console.error("Error, err.message");
    return;
  }

  const contenidoObj = JSON.parse(contenidoStr);
  const size = Buffer.from(contenidoStr).length + " bytes";

  let info = {
    contenidoStr,
    contenidoObj,
    size,
  };

  console.log(info);
  fs.writeFile("info.txt", JSON.stringify(info, null, "\t"), (err) => {
    if (err) {
      console.error("Error:", err.message);
    }
  });
});
