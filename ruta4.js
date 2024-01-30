const express = require('express');
const router = express.Router();

router.get('/ruta4', (req, res) => {
    res.send('MUNDO SOY LA RUTA 4!');
});

module.exports = router;
