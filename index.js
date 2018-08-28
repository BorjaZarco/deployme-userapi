const usersRouter = require('./api/users');
const serviceRouter = require('./api/services');
const loginRouter = require('./services/authorization');
const express = require('express');
const app = express();
const cors = require('cors');


//middlewares
app.use(express.json());
app.use(cors());
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/services', serviceRouter)

app.listen(5000, (err) => {
    console.log('Servidor listo en el puerto ' + 5000);
})