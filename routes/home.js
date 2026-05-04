const express = require('express');
const home = express.Router();

// Route untuk homepage
home.get('/', (req, res) => {

    res.render('home');
});


home.get('/mulai', (req, res) => {
    const paket = {
        pageTitle: 'introduction',
        activeNav: 'docs',
        activePage: 'introduction'
    };
    
    res.render('pages/introduction', paket);
});

// Route untuk halaman tentang
home.get('/about', (req, res) => {
    res.send('Ini adalah halaman tentang kami.');
});

module.exports = home;