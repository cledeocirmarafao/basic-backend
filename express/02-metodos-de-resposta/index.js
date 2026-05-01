const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Cledeocir Marafão" },
  { id: 2, name: "Alice Zielinski" },
  { id: 3, name: "Helena Marafão Zielinski" },
];

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((u) => u.id == id);

//   if (!user) {
//     return res.status(404).send("User not Found");
//   }
//   return res.json(user);
// });

// app.get('/users/:id', (req, res) => {
//     return res.redirect('http://cledeocirmarafao.com.br')
// })

app.get('/download', (req, res) => {
    res.download('/caminho-do-arquivo/')
})

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
