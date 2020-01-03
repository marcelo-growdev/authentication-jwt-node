import { Router } from 'express';

import CardController from './app/controllers/CardController';

const routes = Router();

routes.get('/', (req, res) => res.json('TEST-API'));

routes.get('/cards', CardController.index);
routes.get('/cards/:id', CardController.show);
routes.post('/cards', CardController.store);

export default routes;
