const express = require('express');
const UserController = require('./controllers/UserController')

const app = express();
const PORT=3000;

app.get('/', (req,res) =>{
  res.status(200).send('Oi to funcionando')
});

app.get('/users', UserController.getAll)

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));