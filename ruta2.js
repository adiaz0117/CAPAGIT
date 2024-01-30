const express = require('express');
const router = express.Router();

router.get('/ruta2', (req, res) => {
    res.send('Hola Mundo desde ruta 2!');
});

module.exports = router;
