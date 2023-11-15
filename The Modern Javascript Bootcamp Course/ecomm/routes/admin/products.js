import express from 'express';
import multer from 'multer';

import productsRepo from '../../repositories/products.js';
import productsNewTemplate from '../../views/admin/products/new.js';
import productsIndexTemplate from '../../views/admin/products/index.js';
import productsEditTemplate from '../../views/admin/products/edit.js'
import { requireTitle, requirePrice } from './validators.js';
import { handleErrors, requireAuth } from './middlewares.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// PRODUCTS INDEX
router.get('/admin/products', 
    // MIDDLEWARE
    requireAuth, 
    async (req, res) => {
        const products = await productsRepo.getAll();
        res.send(productsIndexTemplate({ products }));
    }
);

// NEW PRODUCT
router.get('/admin/products/new', 
    // MIDDLEWARE
    requireAuth,  
    (req, res) => {
        res.send(productsNewTemplate({}));
    }
);
router.post('/admin/products/new', 
    // MIDDLEWARES
    requireAuth,
    upload.single('image'), 
    [requireTitle, requirePrice], 
    handleErrors(productsNewTemplate),
    async (req, res) => {
        // GET IMAGE AND TURN IT TO A STRING
        const image = req.file.buffer.toString('base64');
        // GET PRODUCT DATA
        const { title, price } = req.body;
        // CREATE PRODUCT
        await productsRepo.create({ title, price, image });
        // REDIRECT TO PRODUCT INDEX AFTER PRODUCT CREATION
        res.redirect('/admin/products');
    }
);

// EDIT SPECIFIC PRODUCT
router.get('/admin/products/:id/edit', 
    // MIDDLEWARE
    requireAuth,
    async (req, res) => {
        const product = await productsRepo.getOne(req.params.id);
        if(!product){
            return res.send('Product not found')
        }
        res.send(productsEditTemplate({ product }));
    }
);
router.post('/admin/products/:id/edit', 
    // MIDDLEWARES
    requireAuth,
    upload.single('image'), 
    [requireTitle, requirePrice], 
    handleErrors(productsEditTemplate, async (req) => {
        const product = await productsRepo.getOne(req.params.id);
        return { product };
    }),
    async (req, res) => {
        const changes = req.body;
        // IF A FILE WAS ADDED TO THIS REQUEST ADD IT TO CHANGES
        if(req.file){
            changes.image = req.file.buffer.toString('base64');
        }
        // UPDATE PRODUCT
        try {
            await productsRepo.update(req.params.id, changes);
        } catch (err){
            return res.send('Could not find item');
        }
        // ONCE THE CHANGES ARE READY REDIRECT TO PRODUCTS
        res.redirect('/admin/products');
    }    
);

// DELETE PRODUCT
router.post('/admin/products/:id/delete', 
    // MIDDLEWARE
    requireAuth,
    async (req, res) => {
        await productsRepo.delete(req.params.id);
        // REDIRECT TO PRODUCT INDEX AFTER PRODUCT DELETION
        res.redirect('/admin/products');
    }
);

// EXPORT ROUTER TO INDEX.JS
export default router;