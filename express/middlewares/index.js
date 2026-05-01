const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Requisição recebida em ${new Date()}`);
  next();
});

app.get("/users", (req, res) => {
  console.log("Caiu na rota de usuários");
  res.send('Caiu na rota de usuários com send')
});

app.get("/", (req, res) => {
  console.log("Caiu na rota raiz");
  res.send('Caiu na rota raiz com send')
});

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
