const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ "extended" : false }));

app.use(session({
    secret: "keyforencryption"
}));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

const products = [
    {
        id: 1,
        name: "HP Laptop", 
        price: 400, 
        description: "HP laptop description"   
    },
    {
        id: 2,
        name: "Dell Laptop", 
        price: 500, 
        description: "Dell laptop description"   
    },
    {
        id: 3,
        name: "Macbook Pro", 
        price: 900, 
        description: "Macbook description"   
    },
    {
        id: 4,
        name: "Macbook Air", 
        price: 800, 
        description: "Macbook Air description"   
    },
]; 

app.get('/', (req, res) => {
    
    res.render('products', { products }); 
});

app.post('/addToCart', (req, res) => {
    // if(req.session.cart.name === req.body.name) {
    //     products.price = req.
    // }
    let cart = {
        name: req.body.name, 
        price: req.body.price
    }; 

    req.session.cart = cart; 
});

app

app.listen(3000);