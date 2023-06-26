//1) app.js has all the express configuration
const express = require('express');

const productRouter = require('./routes/productRoutes');

const app = express();

app.use(express.json());


app.use((req, res, next)=>{
    console.log('Hello from the middleware');
    next();
});


app.use((req, res, next) =>{
    req.requestTime = new Date().toISOString();
    next();
})


app.use('/api/v1/products', productRouter);

module.exports = app;
