const express = require('express');
const router = express.Router();

router.get('/ruta2', (req, res) => {
    res.send('adios Mundo desde ruta 2!');
});

module.exports = router;
