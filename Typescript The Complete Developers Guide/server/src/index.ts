import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

// CREATE APP
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lasfjaf'] })); // ADD SESSION TO REQ PROPERTY

// ROUTER
app.use(AppRouter.getInstance());

// APP LISTENING PORT
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
