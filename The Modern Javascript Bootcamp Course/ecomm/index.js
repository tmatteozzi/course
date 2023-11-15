import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import authRouter from './routes/admin/auth.js';
import adminProductsRouter from './routes/admin/products.js'
import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';

// CREATING A WEB SERVER
const app = express();
// APPLY MIDDLEWARES FUNCTION TO ALL REQUESTS
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['dsg2hog15jesdjhrwe2e3y41']
}));
app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);
app.use(cartsRouter);

// LISTEN TO REQUESTS ON PORT 3000
app.listen(3000, () => {
    console.log("Listening");
});