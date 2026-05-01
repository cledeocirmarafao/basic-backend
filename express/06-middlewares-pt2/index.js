const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");

app.use(cookieParser());

app.post("/cookies", (req, res) => {
    res.cookie('name', 'Marafa').send('Cookies definidos com cookie-parser.')
});

app.get('/cookies', (req, res) => {
    console.log(req.cookies);
    res.send('Getting the cookies')
})

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
