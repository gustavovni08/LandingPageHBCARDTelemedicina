const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Servir arquivos estáticos a partir da pasta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Rota catch-all para servir o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});