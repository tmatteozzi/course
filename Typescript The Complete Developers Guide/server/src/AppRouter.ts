import express from 'express';

export class AppRouter {
    private static instance: express.Router;

    static getInstance(): express.Router {
        // IF THERE IS NO INSTANCE CREATE IT FIRST
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}
