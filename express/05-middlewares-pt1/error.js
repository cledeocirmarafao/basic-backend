const express = require("express");
const app = express();

//ERROR-HANDLING É SEMPRE CRIADO DEPOIS DE TODAS AS ROTAS.

app.get("/", (req, res) => {
  throw new Error('Lascou!')
});

app.use((err, req, res, next) => {
    res.status(501).send('Algo deu erro!')
})

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
