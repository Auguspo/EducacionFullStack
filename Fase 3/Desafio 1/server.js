const express = require("express");
const app = express();

app.get("/hora", (req, res) => {
  const hora = new Date().getHours();

  let mensaje;

  if (hora > 6 && hora < 12) {
    mensaje = "Buenos dias!";
  } else if (hora > 13 && hora < 19) {
    mensaje = "Buenas tardes!";
  } else {
    mensaje = "Buenas noches!";
  }

  res.send(`<h2 style="color: blue;">${mensaje}</h2>`);
});

app.listen(8080);