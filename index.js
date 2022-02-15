const express = require('express');
const UserController = require('./controllers/UserController');
const bodyParser = require('body-parser');

const { validaterUser,validaterParams } = require('./middleware/Validaters');

const app = express();
app.use(bodyParser.json());
const PORT=3000;

app.get('/', (req,res) =>{
  res.status(200).send('Oi to funcionando')
});

app.get('/users', UserController.getAll);
app.get('/users/:id', validaterParams, UserController.getById);
app.post('/users', validaterUser, UserController.create);
app.delete('/users/:id', validaterParams, UserController.deleteById);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));