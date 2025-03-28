const express = require('express');
const routes = express.Router();

const UsersController = require('./controllers/UsersController');
const PetsController = require('./controllers/PetsController');
const OngsController = require('./controllers/OngsController');

routes.get('/', (request, response) => {
    response.json({
        message: 'Bem-vindo ao servidor Pets! (versão 1.00)',
    });
});

routes.post('/signIn', UsersController.signIn);
routes.post('/newuser', UsersController.newuser);

routes.get('/pets', PetsController.index);
routes.post('/newpet', PetsController.create);
routes.get('/search/:idPet', PetsController.search);
routes.put('/updPet', PetsController.update);

routes.get('/ongs', OngsController.index);
routes.post('/newong', OngsController.create);
routes.get('/search/:idOng', OngsController.search);
routes.put('/updOng', OngsController.update);


module.exports = routes;
