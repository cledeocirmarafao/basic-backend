const express = require("express");
const app = express();
const userRouter = require("./userRouters");
const postRouter = require('./postRouters');

app.use('/users', userRouter)
app.use('/post', postRouter)

app.listen(3000, () => {
  console.log("Servidor em execução em http://localhost:3000");
});
