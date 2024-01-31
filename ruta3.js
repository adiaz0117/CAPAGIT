const express = require('express');
const router = express.Router();

router.get('/ruta3', (req, res) => {
    res.send('adios Mundo RUTA 3!');
});

module.exports = router;
