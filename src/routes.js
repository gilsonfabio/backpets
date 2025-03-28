const express = require('express');
const routes = express.Router();

const UsersController = require('./controllers/UsersController');
const ProductsController = require('./controllers/ProductsController');
const GruposController = require('./controllers/GruposController');

routes.get('/', (request, response) => {
    response.json({
        message: 'Bem-vindo ao servidor Pets!',
    });
});

routes.post('/signIn', UsersController.signIn);
routes.post('/newuser', UsersController.newuser);

routes.get('/produtos', ProductsController.index);
routes.post('/newproduct', ProductsController.create);
routes.get('/detproduct/:proId', ProductsController.detProduct);
routes.get('/searchPro/:idPro', ProductsController.searchPro);
routes.get('/linprodutos/:idLnh', ProductsController.lnhProdutos);

routes.get('/grupos', GruposController.index);
routes.post('/newgrupo', GruposController.create);

module.exports = routes;
