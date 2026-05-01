const express = require("express");
const app = express();

app.use((req, res, next) => {
  const isLogged = false;
  if (isLogged) {
    next();
  } else {
    res
      .status(401)
      .send("Você precisa estar logado para acessar essa página! ");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
