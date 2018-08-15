const usersRouter = require('./api/users');
const express = require('express');
const app = express();

//middlewares
app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(5000);