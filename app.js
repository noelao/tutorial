require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.locals.title = "Tutorial ^v^"; // Jika tidak ada title, pakai ini
    next();
});

// Setup EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layouts/main'); // Opsional jika pakai layouts


// Routes
app.use('/', require('./routes/home'));


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});