const express = require('express');
const ditto = require('./pokemon/ditto.json');

const PORT = process.env.PORT ?? 1234;

const app = express();
app.disable('x-powered-by');

// middleware para extraer y transformar JSON
app.use((req, res, next) => {
    if (req.method !== 'POST') return next();
    if (req.headers['content-type'] !== 'application/json') return next();

    // acá solo llegan req que son POST y JSON
    let body = '';
    // escuchar el evento data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        // mutar la req y poner la info dentro del body
        req.body = data;
        next();
    });
});

// para hacer todo lo que hicimos en el middleware de arriba express tiene un middleware:
// app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>Mi página</h1>');
});

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto);
});

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body);
});

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:1234`);
});
