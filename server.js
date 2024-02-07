const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

// Configurar Express para servir archivos estáticos desde la carpeta raíz
app.use(express.static(__dirname));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
