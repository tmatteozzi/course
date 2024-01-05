import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

// CREATE APP
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTER
app.use(router);

// APP LISTENING PORT
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
