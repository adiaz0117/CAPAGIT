const express = require('express');
const router = express.Router();

router.get('/ruta1', (req, res) => {
    res.send('Hola Mundo desde ruta 1!');
});

module.exports = router;
