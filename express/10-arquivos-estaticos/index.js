const express = require('express');
const app = express();
const path = require('path');

const publicDirectoryPath = path.join(__dirname, 'public');
app.use(express.static(publicDirectoryPath));

app.use('/assets', express.static('./files'));

app.listen(3000, () => {
   console.log('Servidor iniciado na porta http://localhost:3000');
});