const usersRouter = require('./api/users');
const express = require('express');
const app = express();


const config = require('./.env');
const options = config[process.env.NODE_ENV];
const _PORT = options.PORT;


//middlewares
app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(_PORT);