const express = require("express");
const app = express();
const router = require('./routes')

app.use("/", router);

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});


// Usando uma função de callback simples
// app.get('/', (req, res) => {
//    res.send('Olá, mundo!');
// });

// Usando uma função nomeada
// const mostrarOlaMundo = (req, res) => {
//     res.send('Olá, mundo com função nomeada!');
// };
// app.get('/', mostrarOlaMundo);

// Criando um handler na própria rota e usar next para passar o controle para o próximo route handler:
// app.get('/', (req, res, next) => {
//    console.log('Olá, mundo!');
//    next();
// },(req, res) => {
//    res.send('Este é o segundo route handler');
// });

// Chamando uma função como argumento da rota
// function logRequest(req, res, next) {
//    console.log('Nova requisição recebida!');
//    next();
// }
// app.get('/', logRequest, (req, res) => {
//    res.send('Olá, mundo!');
// });

// Definir um array de funções que serão executadas em sequência
// const cb0 = function (req, res, next) {
//    console.log('CB0');
//    next();
// }

// const cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
// }

// const cb2 = function (req, res) {
//    res.send('CB2');
// }

// app.get('/', [cb0, cb1, cb2]);

// Combinação de funções e um array de funções
// const cb0 = function (req, res, next) {
//    console.log('CB0');
//    next();
// }

// const cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
// }

// app.get('/', [cb0, cb1], (req, res, next) => {
//    console.log('a resposta vai ser enviada para a próxima função ...');
//    next();
// }, (req, res) => {
//    res.send('última parada!');
// });

