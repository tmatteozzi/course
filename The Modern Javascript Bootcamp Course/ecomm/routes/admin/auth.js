import express from 'express';

import usersRepo from '../../repositories/users.js';
import signupTemplate from '../../views/admin/auth/signup.js';
import signinTemplate from '../../views/admin/auth/signin.js';
import { requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPasswordForUser } from './validators.js';
import { handleErrors } from './middlewares.js';

// LINK THE APP FROM INDEX
const router = express.Router();

// SIGN UP
router.get('/signup', (req, res) => {
    res.send(signupTemplate({ req }));
});
router.post('/signup', 
    // MIDDLEWARES
    [requireEmail, requirePassword, requirePasswordConfirmation],
    handleErrors(signupTemplate),  
    async (req, res) => {
        // GET EMAIL AND PASS
        const { email, password } = req.body;
        // CREATE USER
        const user = await usersRepo.create( { email, password } )
        // STORE USER ID INTO A COOKIE
        req.session.userId = user.id;
        // REDIRECT TO PRODUCT INDEX AFTER SIGNING UP
        res.redirect('/admin/products');
    }
);

// SIGN IN 
router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
});
router.post('/signin', 
    // MIDDLEWARES
    [ requireEmailExists, requireValidPasswordForUser ], 
    handleErrors(signinTemplate), 
    async (req, res) => {
        // GET USER BY EMAIL
        const { email } = req.body;
        const user = await usersRepo.getOneBy({ email });
        // STORE USER ID INTO A COOKIE
        req.session.userId = user.id;
        // REDIRECT TO PRODUCT INDEX AFTER SIGNING IN
        res.redirect('/admin/products');
    }
);

// SIGN OUT
router.get('/signout', (req, res) => {
    // FORGET ALL INFO STORED INSIDE THE COOKIE
    req.session = null;
    res.send('You are logged out');
});

// EXPORT ROUTER TO INDEX.JS
export default router;