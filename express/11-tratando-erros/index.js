app.get('/users/:id', async (req, res) => {
 try {
     const user = await getUserById(req.params.id);
     res.json(user);
 } catch (error) {
     res.status(500).json({ mensagem: 'Erro ao obter usuário' });
 }
});

//CÓDIGO DO ERRO GLOBAL:

app.use((error, req, res, next) => {
   res.status(500).json({ mensagem: 'Ocorreu um erro inesperado' });
});  

//COMANDO PARA INSTALAR O express-async-handler:
//Instalação: npm i --save express-async-handler

const express = require('express');
const app = express();
const asyncHandler = require('express-async-handler');

app.get(
   '/',
   asyncHandler(async (req, res, next) => {
   throw new Error('erro de teste');
})
);

// Manipulador de erros do Express
app.use((err, req, res, next) => {
   console.error(err);
   res.status(500).send('Ocorreu um erro no servidor!');
});

app.listen(3000, () => {
   console.log('Servidor iniciado na porta http://localhost:3000');
});