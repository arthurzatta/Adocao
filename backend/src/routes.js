import { Router } from 'express';
import User from './controller/user';

const routes = new Router();
const user = new User();

routes.post('/', user.list);

export default routes;
