import { Router } from 'express';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.get('/', (req, res) => res.json('JWT-API'));


routes.post('/users', UserController.store);
routes.post('/login', AuthController.store);

routes.use(authMiddleware);

routes.get('/test-auth', (req, res) => res.json({ logged: req.userId, result: 'JWT-API-AUTH' }));

export default routes;
