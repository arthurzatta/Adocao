/* eslint-disable import/no-named-as-default-member */
import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', UserController.list);
routes.post('/register', UserController.create);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.delete('/remove', UserController.remove);
routes.put('/update', UserController.update);

export default routes;
