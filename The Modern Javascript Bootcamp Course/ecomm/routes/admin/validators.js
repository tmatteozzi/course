import { check } from 'express-validator';
import usersRepo from '../../repositories/users.js';

const validators = {
    requireEmail: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must be a valid email')
        // CHECK IF EMAIL ALREADY EXISTS
        .custom(async (email) => {
            const existingUser = await usersRepo.getOneBy({ email });
            if(existingUser){
                throw new Error('Email in use');
            }
        }),
    requirePassword: check('password')
        .trim()
        .isLength({ min:4, max: 20 })
        .withMessage('Must be between 4 and 20 characters'),
    requirePasswordConfirmation: check('passwordConfirmation')
        .trim()
        .isLength({ min:4, max: 20 })
        .withMessage('Must be between 4 and 20 characters')
        // CHECK IF PASSWORDS DONT MATCH
        .custom((passwordConfirmation, { req }) => {
            if(passwordConfirmation !== req.body.password){
                throw new Error('Passwords must match');
            } else {
                return true;
            }
        }),
    requireEmailExists: check('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Must provide a valid email')
        .custom(async (email) => {
            const user = await usersRepo.getOneBy({ email });
            // IF THERE IS NO USER WITH THAT MAIL THROW AN ERROR
            if(!user){
                throw new Error('Email not found');
            }
        }),
    requireValidPasswordForUser: check('password')
        .trim()
        .custom(async (password, { req }) => {
            const user = await usersRepo.getOneBy({ email: req.body.email });
            if(!user){
                throw new Error('Invalid password');
            }
            // CHECK IF THE PASSWORDS MATCH
            const validPassword = await usersRepo.comparePasswords(user.password, password);
            if(!validPassword){
                throw new Error('Invalid password');
            }
        }),
    requireTitle: check('title')
        .trim()
        .isLength({ min: 5, max: 40 })
        .withMessage('Must be between 5 and 40 characters'),
    requirePrice: check('price')
        .trim()
        .toFloat()
        .isFloat({ min: 1 })
        .withMessage('Must be a number greater than 1')
};

export const { requireEmail, requirePassword, requirePasswordConfirmation, requireEmailExists, requireValidPasswordForUser, requireTitle, requirePrice } = validators;