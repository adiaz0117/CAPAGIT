const express = require('express');
const router = express.Router();

router.get('/ruta1', (req, res) => {
    res.send(' desde ruta 1! te saludo, modifcadaa');
});

module.exports = router;
