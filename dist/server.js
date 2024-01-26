const express = require('express')
const app = express()
const path = require('path')

const port = 3000

// const allowedIPs = ['191.101.78.53']

// app.use((req, res, next) => {
//     const clientIP = req.ip || req.connection.remoteAddress;
    
//     if (allowedIPs.includes(clientIP)) {
//       // IP permitido, continue com o próximo middleware
//       next();
//     } else {
//       // IP não permitido, envie uma resposta proibida
//       res.status(403).send('Acesso proibido');
//     }
//   });

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, '/js')))
app.use(express.static(path.join(__dirname, '/css')))
app.use(express.static(path.join(__dirname, '/img')))

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
    // res.sendFile(path.join(__dirname, '/js/app.254b8b5c.js'))
    // res.sendFile(path.join(__dirname, '/js/chunk-vendors.1ea736f5.js'))
})

app.listen( port, () => {
    console.log('servidor rodando em http://localhost:' + port)
})