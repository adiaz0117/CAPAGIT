const express = require('express');
const app = express();

// Importar los módulos de ruta
const ruta1 = require('./ruta1');
const ruta2 = require('./ruta2');
const ruta3 = require('./ruta3');
// Continúa importando otras rutas de la misma manera

// Usar las rutas importadas
app.use(ruta1);
app.use(ruta2);
app.use(ruta3);
// Continúa usando otras rutas de la misma manera

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
