const express = require('express')
const app = express()
const path = require('path')

const port = 8080

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'dist/js')))
app.use(express.static(path.join(__dirname, 'dist/css')))
app.use(express.static(path.join(__dirname, 'dist/img')))

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen( port, () => {
    console.log('servidor rodando em http://localhost:' + port)
})