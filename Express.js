const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

const server = app.listen (PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

app.get('/', (req, res) => {res.send({ mensaje: 'hola mundo' })})

app.get('/productos', (req, res) => {res.send({ nombre: 'Alan Rojas', apodo: 'Chalan DeMarco', edad: 26 })})