import express from 'express';

import cartsRepo from '../repositories/carts.js';
import productsRepo from '../repositories/products.js';
import cartShowTemplate from '../views/carts/show.js';

const router = express.Router();

// ADD ITEM TO A CART
router.post('/cart/products', async (req, res) => {
    let cart;
    // CHECK IF USER HAS A CART
    if(!req.session.cartId){
        // IF THE USER DONT HAVE A CART CREATE ONE
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        cart = await cartsRepo.getOne(req.session.cartId);
    }
    // ADD NEW PRODUCT OR INCREMENT PRODUCT QUANTITY
    const existingItem = cart.items.find((item) => {
        return item.id === req.body.productId;
    });
    if(existingItem){
        // INCREMENT QUANTITY 
        existingItem.quantity++;
    } else {
        // ADD NEW PRODUCT ID TO CART
        cart.items.push({ id: req.body.productId, quantity: 1 });
    }
    // SAVE RECORD
    await cartsRepo.update(cart.id, {
        items: cart.items
    });

    res.redirect('/cart');
});

// SHOW ALL ITEMS IN CART
router.get('/cart', async (req, res) => {
    // IF USER DONT HAVE A CART REDIRECT TO PRODUCTS
    if(!req.session.cartId){
        return res.redirect('/');
    }
    // GET CART
    const cart = await cartsRepo.getOne(req.session.cartId);
    // GET PRODUCTS FROM CART ITEMS
    for(let item of cart.items){
        // GET PRODUCT
        const product = await productsRepo.getOne(item.id);
        item.product = product;
    }
    res.send(cartShowTemplate({ items: cart.items }));
});

// DELETE ITEMS IN CART
router.post('/cart/products/delete', async (req, res) => {
    // GET ITEM ID
    const { itemId } = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);
    // SAVE ALL ITEMS EXCEPT THE ONE WITH THE ID THAT IS GOING TO BE DELETED
    const items = cart.items.filter(item => item.id !== itemId);
    // UPDATE ITEMS ON CART
    await cartsRepo.update(req.session.cartId, { items });
    res.redirect('/cart');
});

// EXPORT ROUTER TO INDEX.JS
export default router;