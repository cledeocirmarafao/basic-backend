const express = require("express");
const app = express();

const checkAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next(); //passa para o próximo middleware
  }
  res.status(403).send("Você não tem permissão para acessar está página! ");
};

const checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next(); //passa para o próximo middleware
  } else {
    res
      .status(401)
      .send("Você precisa estar logado para acessar está página! ");
  }
};

app.get("/admin", checkAuth, checkAdmin, (req, res) => {
  res.send("Bem-vindo a página de administração!");
});
