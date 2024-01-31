const express = require('express');
const router = express.Router();

router.get('/ruta1', (req, res) => {
    res.send('Adios Mundo desde ruta 1!');
});

module.exports = router;
