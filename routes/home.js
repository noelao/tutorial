const express = require('express');
const home = express.Router();

// Route untuk homepage
home.get('/', (req, res) => {
    res.render('home');
});

// Route untuk halaman tentang
home.get('/about', (req, res) => {
    res.send('Ini adalah halaman tentang kami.');
});

module.exports = home;