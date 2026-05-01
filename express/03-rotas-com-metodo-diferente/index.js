const express = require("express");
const app = express();

app.get("/usuarios/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Este é o perfil do usuário ${name}`);
});

app.put("/usuarios/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Este é o perfil do usuário ${name} com put`);
});

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
