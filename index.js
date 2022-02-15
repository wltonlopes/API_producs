const express = require('express');
var cors = require('cors')

const UserController = require('./controllers/UserController');
const ProductsController = require('./controllers/ProductsControllers');
const bodyParser = require('body-parser');

const { validaterUser,validaterParams } = require('./middleware/Validaters');

const app = express();
app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.PORT || 3000;

// app.get('/', (req,res) =>{
//   res.status(200).send('Oi to funcionando')
// });
app.get('/products', ProductsController.getAll);
app.get('/products/:id', validaterParams, ProductsController.getById);
app.post('/products', ProductsController.create);
app.delete('/products/:id', validaterParams, ProductsController.deleteById);

app.get('/users', UserController.getAll);
app.get('/users/:id', validaterParams, UserController.getById);
app.post('/users', validaterUser, UserController.create);
app.delete('/users/:id', validaterParams, UserController.deleteById);


app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));