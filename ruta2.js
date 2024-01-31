const express = require('express');
const router = express.Router();

router.get('/ruta2', (req, res) => {
    res.send('Que onda Ale !');
});

module.exports = router;
