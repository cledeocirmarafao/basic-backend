const express = require("express");
const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send("Caiu na rota raiz de postagens.");
});

postRouter.get("/save", (req, res) => {
  res.send("Caiu na rota save de postagens.");
});

module.exports = postRouter