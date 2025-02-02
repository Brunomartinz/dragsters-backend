import { Router } from 'express';

import productsRouter from './products.routes';
import showcaseRouter from './showcase.routes';
import usersRouter from './users.routes';
import sessionRouter from './sessions.routes';
import customersRouter from './customers.routes';
import billingAddressRouter from './billing-address.routes';
import deliveryAddressRouter from './delivery-address.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/showcase', showcaseRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);
routes.use('/customers', customersRouter);
routes.use('/customer/billing-address', billingAddressRouter);
routes.use('/customer/delivery-address', deliveryAddressRouter);

export default routes;
