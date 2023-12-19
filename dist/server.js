const express = require('express');
const path = require('path');

const app = express();
const porta = process.env.PORT || 8080;

// Configurar a aplicação express e adicionar rotas, middlewares, etc.

// Rota catch-all para servir o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar o servidor
app.listen(porta, () => {
  console.log(`Servidor está ouvindo na porta ${porta}`);
});
