/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import multer from 'multer';
import path from 'path';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import PetsController from './app/controllers/PetsController';
import FavoritesController from './app/controllers/FavoritesController';
import NotificationController from './app/controllers/NotificationController';
import LostPetsController from './app/controllers/LostPetsController';
import FileController from './app/controllers/FileController';

const routes = new express.Router();
const upload = multer(multerConfig);

routes.get('/', UserController.list);
routes.post('/register', UserController.create);
routes.post('/sessions', SessionController.store);

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.delete('/remove', UserController.remove);
routes.put('/update', UserController.update);

routes.get('/pets', PetsController.list);
routes.get('/pets/:id', PetsController.show);
routes.post('/pets/create', PetsController.create);
routes.post('/pets/filter', PetsController.filter);
routes.delete('/pets/remove/:id', PetsController.remove);

routes.post('/lost/create', LostPetsController.create);
routes.get('/lost/:id', LostPetsController.show);
routes.delete('/lost/remove/:id', LostPetsController.remove);

routes.get('/favorites', FavoritesController.list);
routes.post('/favorites/create/:id', FavoritesController.create);
routes.delete('/favorites/remove/:id', FavoritesController.remove);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.delete('/notifications/remove/:id', NotificationController.remove);

export default routes;
