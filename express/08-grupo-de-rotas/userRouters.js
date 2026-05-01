const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("Caiu na rota raiz de usuários.");
});

userRouter.get("/save", (req, res) => {
  res.send("Caiu na rota save de usuários.");
});

module.exports = userRouter