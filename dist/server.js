const express = require('express');
const path = require('path');

const app = express();
const porta =  8080;

// Configurar a aplicação express e adicionar rotas, middlewares, etc.

// Rota catch-all para servir o index.html
app.use(express.static(path.join(__dirname), { 'Content-Type': 'application/javascript' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar o servidor
app.listen(porta, () => {
  console.log(`Servidor está ouvindo na porta ${porta}`);
});
