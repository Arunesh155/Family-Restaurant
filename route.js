const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/main.html");
});

router.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

router.get('/cart', (req, res) => {
    res.sendFile(__dirname + "/cart.html");
});

router.get('/search', (req, res) => {
    res.sendFile(__dirname + "/search.html");
});

router.get('/order', (req, res) => {
    res.sendFile(__dirname + "/order.html");
});

module.exports = router;
