/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import PetsController from './app/controllers/PetsController';
import FavoritesController from './app/controllers/FavoritesController';

const routes = new Router();

routes.get('/', UserController.list);
routes.post('/register', UserController.create);
routes.post('/sessions', SessionController.store);

routes.get('/pets', PetsController.list);
routes.use(authMiddleware);

routes.delete('/remove', UserController.remove);
routes.put('/update', UserController.update);

routes.post('/pets/create', PetsController.create);
routes.delete('/pets/remove', PetsController.remove);

routes.get('/favorites', FavoritesController.list);
routes.post('/favorites/create', FavoritesController.create);
routes.delete('/favorites/remove', FavoritesController.remove);

export default routes;
