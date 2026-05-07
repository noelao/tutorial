const express = require('express')
const preview = express.Router()

preview.get('/:id', (req, res) => {
  const id = req.params.id
  res.sendFile(
    path.join(req.app.locals.viewsDir, 'preview', `${id}.html`),
    err => { if (err) res.status(404).send('Preview tidak tersedia.') }
  )
})

module.exports = preview