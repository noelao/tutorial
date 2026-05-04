const express = require('express');
const docs    = express.Router();

docs.get('/', (req, res) => {
  res.redirect('/docs/introduction');
});

docs.get('/:id/:subid', (req, res) => {
  const id     = req.params.id;
  const subid  = req.params.subid;

  const locals = {
    pageTitle:  subid,
    activeNav:  'docs',
    activePage: subid,
  };

  res.render(`pages/${id}/${subid}`, locals, (err, html) => {
    if (err) {
      return res.status(404).render('pages/404', {
        pageTitle: '404 — Halaman tidak ditemukan',
        activeNav: 'docs',
        activePage: '',
      });
    }
    res.send(html);
  });

});

module.exports = docs;