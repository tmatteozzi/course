import express from "express";

import productsRepo from '../repositories/products.js';
import productsIndexTemplate from '../views/products/index.js';

const router = express.Router();

// HOMEPAGE
router.get('/', async (req, res) => {
    const products = await productsRepo.getAll();
    res.send(productsIndexTemplate({ products }));
});

// EXPORT ROUTER TO INDEX.JS
export default router;